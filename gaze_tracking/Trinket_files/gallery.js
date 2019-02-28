(function($, Trinket) {
  "use strict";

  var template         = Trinket.import('utils.template')
      , _timeframe = 24
      , loadedFrames = {}
      , selectedTrinket;

  function getGallery(el) {
    return $(el).parents('.gallery-section');
  }

  function getQueryType(lang) {
    return $('#' + lang + '-query .active').data('query') || 'active';
  }

  function getLimit(lang) {
    var limit = parseInt($('#' + lang + '-limits .active').text());
    return isNaN(limit) || limit < 5
      ? 5
      : Math.min(limit, 100);
  }

  function getTimeframe(lang) {
    var $el = $('#' + lang + '-timeframe')
        , timeframe;
    if ($el.length) {
      timeframe = parseInt($el.first().val());
      return isNaN(timeframe) || timeframe < 1
        ? 1
        : Math.min(timeframe, 720);
    }
    return void 0;
  }

  function buildGalleryUrl(lang) {
    var type        = getQueryType(lang)
        , limit     = getLimit(lang)
        , timeframe = getTimeframe(lang)
        , baseUrl   = $('#' + lang + '-gallery').data('url')
        , query     = baseUrl + type;

    query += '?lang=' + lang;
    query += '&limit=' + limit;
    if (timeframe) {
      query += '&timeframe=' + timeframe;
    }

    return query;
  }

  function loadGallery(lang) {
    var $gallery = $('#' + lang + '-gallery .gallery')
        , url    = buildGalleryUrl(lang);

    $.get(url, function(result) {
      var maxScore = 0
          , data, score, i;

      $gallery.empty();
      if (result && result.data) {
        for(i = 0; i < result.data.length; i++) {
          maxScore = Math.max(maxScore, result.data[i].score);
        }

        for(i = 0; i < result.data.length; i++) {
          data  = result.data[i];
          score = Math.round((data.score || 0)/maxScore * 100);
          $gallery.append(template('galleryItemTemplate', {
            snapshot  : data.snapshot,
            score     : score,
            signal    : Math.ceil(score/20) * 20,
            lang      : data.lang,
            shortCode : data.shortCode
          }));
        }
      }
    }, 'json');
  }

  function getTrinketFrame(options, cb) {
    var frame = loadedFrames[options.lang]
        , $frame;
    // if load is already in progress, just update the callback
    if (typeof frame === 'function') {
      loadedFrames[options.lang] = cb;
      return;
    };

    // if frame is already loaded, invoke callback immediately
    if (frame) {
      return cb(frame);
    }

    loadedFrames[options.lang] = cb;
    // start loading the frame
    $frame = $(template('iframeTemplate', options));
    
    frame = {
      lang     : options.lang
      , $frame : $frame
    };

    $('#trinketDetails .frames').append($frame);
    $frame.one('load', function() {
      frame.api = $frame[0].contentWindow || $frame[0].contentDocument;
      loadedFrames[options.lang](frame);
      loadedFrames[options.lang] = frame;
    });
  }

  function sumMetrics(metrics, keys) {
    var sum = 0
        , i;
    for(i = 0; i < keys.length; i++) {
      sum += (metrics[keys[i]] || 0);
    }
    return sum;
  }

  var initialized = false;
  Trinket.export('gallery', function() {
    if (initialized) return;
    initialized = true;

    $('.selectors a').on('click', function() {
      $(this).parent('.selectors').find('.active').removeClass('active');
      $(this).addClass('active');
      loadGallery(getGallery(this).data('lang'));
    });

    $('.timeframe-selector').on('change', function() {
      loadGallery(getGallery(this).data('lang'));
    })

    $('.gallery-section').each(function() {
      loadGallery($(this).data('lang'));
    });

    $('#trinketDetails .closer').on('click', function(event) {
      selectedTrinket.api.closeAnyMessage();
      selectedTrinket.api.closeAnyModal();

      $('body').removeClass('no-scroll');
      $('#trinketDetails')
        .removeClass('open')
        .find('iframe.active')
        .removeClass('active');
    });

    $(document).on('click', 'a.trinket-snapshot', function() {
      var data = $(this).data();
      data.shortCode = data.shortCode.toString();

      $('body').addClass('no-scroll');
      $('#trinketDetails .content').addClass('invisible');
      $('#trinketDetails').addClass('open');

      if (!selectedTrinket || selectedTrinket.shortCode !== data.shortCode) {
        selectedTrinket = data;
        getTrinketFrame(
          {lang:data.lang, width:'100%', height:'600'}
          , function(frame) {
            // if the user closed the spotlight or chose a trinket of another type
            // before the frame was ready then we can skip the loading of the first trinket
            if (!selectedTrinket || frame.lang !== selectedTrinket.lang) return;

            $.get('/api/trinkets/' + selectedTrinket.shortCode, function(result) {
              // if the user closed the spotlight or chose another trinket before the
              // first trinket finished loading then we can skip rendering of the first trinket
              if (!selectedTrinket || selectedTrinket.shortCode !== result.data.shortCode) return;

              var metrics = result.data.metrics
                  , info  =  template('trinketDetailTemplate', {
                    runs     : sumMetrics(metrics, ['runs'])
                    , views  : sumMetrics(metrics, ['embedViews', 'linkViews', 'emailViews'])
                    , forks  : sumMetrics(metrics, ['forks'])
                    , shares : sumMetrics(metrics, ['embedShares', 'linkShares', 'emailShares'])
                  });

              frame.api.TrinketApp.setTrinket(result.data, true);
              frame.api.TrinketApp.reset(result.data);

              selectedTrinket.$frame = frame.$frame;
              selectedTrinket.api    = frame.api.TrinketApp;

              $('#trinketDetails .trinket-info').html(info);
              $('#trinketDetails .trinket-title').text(result.data.name || 'Untitled');
              $('#trinketDetails .content').removeClass('invisible');
              frame.$frame.addClass('active');
            });
          }
        );
      }
      else {
        // re-open the previously selected trinket
        $('#trinketDetails .content').removeClass('invisible');
        selectedTrinket.$frame.addClass('active');
      }
    });
  });
})(jQuery, TrinketIO);
