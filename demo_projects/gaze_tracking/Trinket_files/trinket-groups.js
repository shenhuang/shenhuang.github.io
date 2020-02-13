(function($, TrinketIO) {
  function myGroups(options, done) {
    var url    = "/api/groups"
      , groups = [];

    if (options) {
      url = url + "?" + $.param(options);
    }

    $.get(url)
      .done(function(result) {
        if (result.groups) {
          groups = result.groups;
        }

        done(groups);
      })
      .fail(function(xhr, textStatus, errorThrown) {
        done([]);
      });
  }

  function trinketGroups(options, done) {
    var url    = "/api/trinkets/" + options.id + "/groups"
      , groups = [];

    $.get(url)
      .done(function(result) {
        if (result.groups) {
          groups = JSON.parse(result.groups);
        }

        done(groups);
      })
      .fail(function(xhr, textStatus, errorThrown) {
        done([]);
      });
  }

  TrinketIO.export('trinket.groups', {
      myGroups      : myGroups
    , trinketGroups : trinketGroups
  });
})(jQuery, window.TrinketIO);
