(function (angular, config) {
  angular.module('trinket.config', []).factory('trinketConfig', function () {
    return trinketConfig;
  });
}(window.angular, window.trinket.config));(function (angular) {
  angular.module('trinket.util', []).factory('trinketUtil', [
    '$window',
    function ($window) {
      return {
        getProperty: function (obj, prop) {
          var path = prop.split('.');
          for (var i = 0; i < path.length; i++) {
            if (obj != null) {
              obj = obj[path[i]];
            }
          }
          return obj;
        },
        isElementVisible: function (elem, relativeTo) {
          if (!elem)
            return true;
          var off = elem.offset();
          if (!off)
            return true;
          var et = off.top;
          var eh = elem.height();
          var wh = $window.innerHeight;
          var wy = $window.pageYOffset;
          if (relativeTo && relativeTo.offset() && et < relativeTo.offset().top) {
            wy += relativeTo.offset().top;
          }
          return et >= wy && et + eh <= wh + wy;
        },
        isLarge: function () {
          return matchMedia(Foundation.media_queries['large']).matches;
        }
      };
    }
  ]).filter('formatNum', function () {
    return function (num) {
      with (Math) {
        var base = floor(log(abs(num)) / log(1000));
        var suffix = 'kmb'[base - 1];
        return suffix ? String(num / pow(1000, base)).substring(0, 3) + suffix : '' + num;
      }
    };
  }).filter('formatDate', function () {
    return function (date) {
      return moment(date).subtract(2, 'seconds').fromNow();
    };
  }).filter('localDate', function () {
    return function (date) {
      return moment(date).local().format('LLLL');
    };
  });
}(window.angular));(function (angular, trinketIO) {
  angular.module('trinket.roles', []).factory('trinketRoles', function () {
    return trinketIO.import('trinket.roles');
  });
}(window.angular, window.TrinketIO));(function (angular, trinketIO) {
  angular.module('trinket.groups', []).factory('trinketGroups', function () {
    return trinketIO.import('trinket.groups');
  });
}(window.angular, window.TrinketIO));(function (angular, trinketIO) {
  angular.module('trinket.share', []).factory('trinketShare', function () {
    return trinketIO.import('trinket.share');
  });
}(window.angular, window.TrinketIO));(function (angular) {
  'use strict';
  var MENU_COUNTER = 0;
  function directive($window, $timeout, trinketConfig) {
    var link = function (scope, element, attrs) {
      scope.id = 'new-trinket-menu-' + MENU_COUNTER++;
      scope.items = trinketConfig.get('trinketTypes');
      scope.create = function (lang) {
        $window.location = trinketConfig.getUrl('/library/trinkets/create?lang=' + lang);
      };
      // Whenever the dropdown opens, reposition it based on the dropdown button.
      // This is a hack since foundation doesn't seem to work with fixed position
      // triggers.
      element.on('opened.fndtn.dropdown', function () {
        var h = element.find('.button.dropdown').outerHeight();
        element.find('#' + scope.id).css('top', h + 'px');
      });
      $timeout(function () {
        $(document).foundation();
      }, 0);
    };
    return {
      restrict: 'E',
      scope: true,
      templateUrl: '/cache-prefix-7f6b62d2/partials/directives/trinket.html',
      link: link
    };
  }
  angular.module('trinket.lang', ['trinket.config']).directive('newTrinket', [
    '$window',
    '$timeout',
    'trinketConfig',
    directive
  ]);
}(window.angular));(function (angular) {
  'use strict';
  angular.module('trinket.search', ['trinket.components.trinkets']).directive('trinketSearch', [
    '$document',
    'trinketsApi',
    function ($document, trinketsApi) {
      function link(scope, element) {
        scope.searchInputOpen = scope.searchInputOpen || false;
        scope.searchInputActive = false;
        scope.trinketSearchValue = '';
        scope.navbar = true;
        scope.buttonIcon = scope.buttonIcon || 'fa fa-search fa-fw';
        scope.inputId = scope.inputId || 'trinket-search';
        scope.searchLabelId = scope.searchLabelId || 'search-label';
        scope.toggleSearchInput = function () {
          scope.searchInputOpen = !scope.searchInputOpen;
          if (scope.searchInputOpen) {
            element[0].querySelector('#' + scope.inputId).focus();
          } else {
            scope.searchInputActive = false;
          }
        };
        scope.searchTrinkets = function (val) {
          scope.loadingTrinkets = true;
          scope.searchInputActive = true;
          return trinketsApi.search(val).then(function (results) {
            var trinkets = [];
            scope.loadingTrinkets = false;
            angular.forEach(results, function (trinket) {
              if (!trinket.name) {
                trinket.name = 'Untitled';
              }
              trinkets.push(trinket);
            });
            return trinkets;
          });
        };
        scope.onSelectResult = function (item) {
          scope.trinketSearchValue = '';
          scope.onSelect(item);
        };
        angular.element($document).on('click', function (event) {
          var targetId = event.target.id || $(event.target).parent().attr('id');
          if (targetId !== scope.searchLabelId && targetId !== scope.inputId) {
            scope.searchInputOpen = false;
            scope.searchInputActive = false;
            scope.$apply();
          }
        });
      }
      return {
        restrict: 'E',
        templateUrl: '/cache-prefix-7f6b62d2/partials/directives/trinket-search.html',
        link: link,
        scope: {
          placeholderText: '@',
          onSelect: '=',
          toolbar: '=',
          buttonIcon: '@',
          searchInputOpen: '=?',
          inputId: '@',
          searchLabelId: '@',
          noLabel: '='
        }
      };
    }
  ]);
}(window.angular));(function (angular, module) {
  function Reveal() {
    return {
      restrict: 'AC',
      scope: { close: '=?' },
      link: function (scope, element, attrs) {
        scope.close = function () {
          element.foundation('reveal', 'close');
        };
        element.find('.close-modal').on('click', function () {
          scope.close();
        });
      }
    };
  }
  module.directive('reveal', Reveal);
}(window.angular, window.angular.module('trinket.components.foundation', [])));TrinketIO.export('library.trinkets.create.controller', [
  '$scope',
  '$state',
  '$stateParams',
  'libraryState',
  '$window',
  '$timeout',
  '$http',
  'examples',
  'trinketRoles',
  'trinketConfig',
  function ($scope, $state, $stateParams, libraryState, $window, $timeout, $http, examples, roles, config) {
    $($window).scrollTop(0);
    TrinketIO.import('gallery')();
    $scope.config = config;
    $scope.canCreate = false;
    $scope.examples = examples.data && examples.data.length ? examples.data : null;
    $scope.trinket = { name: '' };
    $scope.trinketApi = null;
    var persist = function () {
      libraryState.resetList();
      var data = $scope.trinketApi.serialize();
      for (var key in data) {
        $scope.trinket[key] = data[key];
      }
      $scope.trinketApi.create($scope.trinket, { library: true }, function (trinket) {
        libraryState.lastTrinket = trinket;
        $scope.trinketApi.destroy();
        $state.go('detail', { shortCode: trinket.shortCode });
      });
    };
    $scope.cancel = function () {
      if ($scope.trinketApi) {
        $scope.trinketApi.destroy();
      }
      $state.go('list');
    };
    $scope.save = function () {
      // delay the save to allow scope to fully update
      // in case the user had focus in the name field
      $timeout(persist);
    };
    $scope.lang = $stateParams.lang;
    $scope.iframeQuery = 'noStorage=true&inLibrary=true&addDefaultCode=true';
    var permission = [
        'create',
        $scope.lang,
        'trinket'
      ].join('-');
    if (roles.hasPermission(permission)) {
      $scope.canCreate = true;
      // only disable sharing if user can create this type of trinket
      // e.g. if trinket is python3 but user is not subscribed to
      // trinket connect, let them share
      $scope.iframeQuery = 'noSharing=true&' + $scope.iframeQuery;
    }
    $scope.setIframeUrl = function (lang) {
      // if glowscript, check for glowscript-blocks permission and give user the option
      if (!lang && $scope.lang === 'glowscript' && roles.hasPermission('create-glowscript-blocks-trinket')) {
        return;
      }
      if ($scope.lang && lang && $scope.lang !== lang) {
        $scope.examples = null;
        $http({
          method: 'GET',
          url: '/api/trinkets/' + lang + '/list?name=examples'
        }).then(function (response) {
          if (response.status === 200 && response.data && response.data.length) {
            $scope.examples = response.data;
          }
        });
      }
      if (lang) {
        $scope.lang = lang;
      }
      $scope.iframeUrl = '/embed/' + $scope.lang + '?' + $scope.iframeQuery;
    };
    $scope.setIframeUrl();
    $scope.$watch('trinketApi', function (newValue, oldValue) {
      if (newValue) {
        $scope.trinketApi.focus();
      }
    });
  }
]);TrinketIO.export('library.trinkets.detail.controller', [
  '$scope',
  '$document',
  '$state',
  '$stateParams',
  'trinketConfig',
  'trinketsApi',
  'libraryState',
  '$timeout',
  '$interval',
  'angularLoad',
  '$filter',
  '$window',
  '$q',
  'trinketRoles',
  'trinketGroups',
  'foldersApi',
  'trinketShare',
  function ($scope, $document, $state, $stateParams, config, trinketsApi, libraryState, $timeout, $interval, angularLoad, $filter, $window, $q, roles, trinketGroups, foldersApi, trinketShare) {
    var timers = {}, lastSavedInterval, originalTitle = $document[0].title;
    $($window).scrollTop(0);
    $scope.isSaving = false;
    $scope.isModified = false;
    $scope.canSave = false;
    $scope.canCopy = false;
    $scope.apiReady = false;
    $scope.saveError = false;
    $scope.isAdmin = $scope.role === 'admin' ? true : false;
    $scope.isSnapping = false;
    $scope.trinketApi = null;
    $scope.embedWidth = 100;
    $scope.embedHeight = 600;
    $scope.embedHeightClass = 'large';
    $scope.embedCode = '';
    $scope.embedUrl = '';
    $scope.externalInit = false;
    $scope.extraOptions = false;
    $scope.autorunOption = false;
    $scope.outputOnlyOption = false;
    $scope.toggleCodeOption = false;
    $scope.runOption = '';
    $scope.runMode = '';
    $scope.groups = [];
    $scope.userInGroup = roles.inGroup();
    $scope.trinketInFolder = false;
    $scope.downloadable = false;
    $scope.blocksOrCode = 'code';
    $scope.folders = libraryState.folders;
    $scope.$on('$destroy', function () {
      $document[0].title = originalTitle;
      if (lastSavedInterval) {
        $interval.cancel(lastSavedInterval);
      }
      for (var key in timers) {
        $timeout.cancel(timers[key]);
      }
      libraryState.folders = $scope.folders;
      $('#publish-slug').off('input', updateSlugOnChange);
      $('#publishTrinket').off('click', publishTrinket);
      $('#unpublishTrinket').off('click', unpublishTrinket);
    });
    lastSavedInterval = $interval(function () {
      if ($scope.trinket) {
        $scope.timeSinceSave = moment($scope.trinket.lastUpdated).fromNow();
      }
    }, 30000);
    $scope.embedSizes = [
      {
        name: 'small (150 pixels)',
        height: 150,
        class: 'small'
      },
      {
        name: 'medium (400 pixels)',
        height: 400,
        class: 'medium'
      },
      {
        name: 'large (600 pixels)',
        height: 600,
        class: 'large'
      }
    ];
    $scope.info = {
      embedSize: $scope.embedSizes[2],
      embedStart: '',
      embedOutputOnly: '',
      shareOutputOnly: '',
      embedToggleCode: '',
      shareToggleCode: '',
      embedRunOption: '',
      shareRunOption: '',
      embedConsoleOption: '',
      shareConsoleOption: '',
      embedRunMenu: '',
      embedDisplayMenu: '',
      shareRunMenu: '',
      shareDisplayMenu: ''
    };
    if (libraryState.lastTrinket) {
      $scope.externalInit = true;
    }
    var addthisurl = config.get('addthisurl');
    if (addthisurl) {
      angularLoad.loadScript(addthisurl);
    }
    $scope.updateName = function (value) {
      return trinketsApi.updateName($scope.trinket.id, { name: value }).then(function (result) {
        if (result.flash && result.flash.validation && result.flash.validation.name) {
          return result.flash.validation.name;
        }
        ;
        $document[0].title = $scope.trinket.name = value;
        libraryState.resetList();
        return;
      });
    };
    $scope.copy = function () {
      libraryState.lastTrinket = $scope.trinket;
      libraryState.lastTrinket.code = $scope.trinketApi.serialize().code;
      $scope.trinketApi.destroy();
      $state.go('copy', { shortCode: $scope.trinket.shortCode });
    };
    $scope.addToLibrary = function (trinket) {
      if ($scope.addingToLibrary)
        return;
      $scope.addingToLibrary = true;
      $scope.trinketApi.addToLibrary(function (trinket) {
        $scope.addingToLibrary = false;
        return $state.go('detail', { shortCode: trinket.shortCode });
      });
    };
    $scope.remove = function () {
      $scope.trinket.remove().then(function () {
        $scope.closeDeleteModal();
        libraryState.resetList();
        $scope.trinketApi.destroy();
        $state.go('list');
      });
    };
    $scope.save = function () {
      $scope.saveError = false;
      if ($scope.trinketApi) {
        var startTime;
        if ($scope.isSaving) {
          return;
        }
        $scope.isSaving = true;
        startTime = new Date().getTime();
        $scope.trinketApi.save($scope.trinketApi.serialize(), function (error) {
          if (error) {
            $scope.isSaving = false;
            $scope.saveError = true;
            $scope.$apply();
            $('#trinketSaveErrorModal').foundation('reveal', 'open');
          } else {
            var elapsed = new Date().getTime() - startTime;
            var saveComplete = function () {
              $scope.isSaving = false;
              $scope.isModified = false;
              $scope.trinket.lastUpdated = Date.now();
              delete timers.save;
            };
            // ensure that the 'saving' state persists for at least 0.5 seconds
            timers.save = $timeout(saveComplete, Math.max(500 - elapsed, 0));
            $scope.timeSinceSave = moment(Date.now()).fromNow();
          }
        });
        libraryState.resetList();
      } else {
      }
    };
    $scope.messageUs = function () {
      if (typeof Intercom !== 'undefined') {
        Intercom('showNewMessage');
      }
    };
    $scope.smile = function () {
      var startTime;
      $scope.isSnapping = true;
      startTime = new Date().getTime();
      $scope.trinket.takeSnapshot().then(function (result) {
        var elapsed = new Date().getTime() - startTime;
        var snapshotTaken = function () {
          $scope.isSnapping = false;
          delete timers.snapshot;
        };
        timers.snapshot = $timeout(snapshotTaken, Math.max(500 - elapsed, 0));
      });
      libraryState.resetList();
    };
    $scope.addToGroupModal = function () {
      $('#createGroupAddTrinket').data('trinket-id', $scope.trinket.id);
      // clear list of groups
      $('#groups-list').empty();
      $('#addToGroupModal').foundation('reveal', 'open');
      trinketGroups.myGroups({ filter: 'add-remixable-trinket' }, function (groups) {
        if (groups.length) {
          $('#no-groups').addClass('hide');
          $('#have-groups').removeClass('hide');
          var checkedClass = 'fa fa-check-circle fa-lg success', addIconClass = 'fa fa-plus-circle fa-lg neutral', removeIconClass = 'fa fa-times-circle fa-lg alert', workingClass = 'fa fa-circle-o-notch fa-lg fa-spin';
          groups.forEach(function (group) {
            var $groupItem = $('<li class=\'group-item\'></li>'), $checked = $('<i class=\'trinket-added ' + checkedClass + '\'></i>'), $addIcon = $('<a class=\'add-to-group\'><i class=\'' + addIconClass + '\'></i></a>'), $groupName = $('<span>' + group.name + '</span>'), $removeIcon = $('<a class=\'remove-from-group right\'><i class=\'' + removeIconClass + '\'></i></a>');
            $groupItem.attr('data-group-id', group.id);
            $groupItem.attr('data-trinket-id', $scope.trinket.id);
            $groupItem.attr('data-name', group.name);
            $groupItem.attr('data-owner-slug', group.ownerSlug);
            $groupItem.attr('data-group-slug', group.slug);
            // if trinket in group...
            if (group.trinkets && group.trinkets.length && _.findWhere(group.trinkets, { trinketId: $scope.trinket.id })) {
              $addIcon.addClass('hide');
            } else {
              $checked.addClass('hide');
              $removeIcon.addClass('hide');
            }
            $groupItem.append($checked);
            $groupItem.append($addIcon);
            $groupItem.append($groupName);
            $groupItem.append($removeIcon);
            $('#groups-list').append($groupItem);
          });
          // events
          $('.add-to-group').click(function (event) {
            var data = $(event.target).closest('li.group-item').data(), $self = $(this);
            $self.find('i').removeClass().addClass(workingClass);
            $.post('/api/groups/' + data.groupId + '/trinkets/' + data.trinketId).done(function (result) {
              if (result.success) {
                setTimeout(function () {
                  $('#add-to-group-messages').notify('Trinket added to group.', { className: 'success' });
                  $self.addClass('hide');
                  $self.find('i').removeClass().addClass(addIconClass);
                  $self.siblings('i.trinket-added').removeClass('hide');
                  $self.siblings('a.remove-from-group').removeClass('hide');
                }, 500);
                $scope.addGroup({
                  groupId: data.groupId,
                  name: data.name,
                  ownerSlug: data.ownerSlug,
                  groupSlug: data.groupSlug
                });
              } else {
                $self.find('i').removeClass().addClass(addIconClass);
                $('#add-to-group-messages').notify('Trinket not added to group. Please try again.', { className: 'alert' });
              }
            }).fail(function (xhr, textStatus, errorThrown) {
              $self.find('i').removeClass().addClass(addIconClass);
              $('#add-to-group-messages').notify('Trinket not added to group. Please try again.', { className: 'alert' });
            });
          });
          $('.remove-from-group').click(function (event) {
            var data = $(event.target).closest('li.group-item').data(), $self = $(this);
            $self.find('i').removeClass().addClass(workingClass);
            $.ajax({
              url: '/api/groups/' + data.groupId + '/trinkets/' + data.trinketId,
              type: 'DELETE'
            }).done(function (result) {
              if (result.success) {
                setTimeout(function () {
                  $('#add-to-group-messages').notify('Trinket removed from group.', { className: 'success' });
                  $self.addClass('hide');
                  $self.find('i').removeClass().addClass(removeIconClass);
                  $self.siblings('i.trinket-added').addClass('hide');
                  $self.siblings('a.add-to-group').removeClass('hide');
                }, 500);
                $scope.removeGroup(data.groupId);
              } else {
                $self.find('i').removeClass().addClass(removeIconClass);
                $('#add-to-group-messages').notify('Trinket was not removed from group. Please try again.', { className: 'alert' });
              }
            }).fail(function (xhr, textStatus, errorThrown) {
              $self.find('i').removeClass().addClass(removeIconClass);
              $('#add-to-group-messages').notify('Trinket was not removed from group. Please try again.', { className: 'alert' });
            });
          });
        } else {
          $('#have-groups').addClass('hide');
          $('#no-groups').removeClass('hide');
        }
      });
    };
    $scope.addGroup = function (group) {
      $scope.groups.push(group);
      $scope.$apply();
    };
    $scope.removeGroup = function (groupId) {
      $scope.groups = _.without($scope.groups, _.findWhere($scope.groups, { groupId: groupId }));
      $scope.$apply();
    };
    $scope.addToFolder = function (folder) {
      folder.addWorking = true;
      $scope.trinket.addToFolder({ folderId: folder.id }).then(function () {
        folder.addWorking = false;
        $scope.trinket.folder = {
          folderId: folder.id,
          name: folder.name,
          folderSlug: folder.slug
        };
        $scope.trinketInFolder = true;
        libraryState.resetList();
      });
    };
    $scope.removeFromFolder = function (folder) {
      folder.removeWorking = true;
      $scope.trinket.removeFromFolder({ folderId: folder.id }).then(function () {
        folder.removeWorking = false;
        $scope.trinketInFolder = false;
        delete $scope.trinket.folder;
        libraryState.resetList();
      });
    };
    $scope.folderMessage = function (message, type) {
      $('#add-to-folder-messages').notify(message, { className: type });
    };
    $scope.emailModal = function () {
      $('#emailModalForm').data('trinket-id', $scope.trinket.id);
      $('#emailModal').foundation('reveal', 'open');
    };
    $scope.linkModal = function () {
      trinketShare.resetParams();
      if (trinketConfig.get('outputOnly').indexOf($scope.trinket.lang) >= 0 || trinketConfig.get('toggleCode').indexOf($scope.trinket.lang) >= 0) {
        $('#shareDisplayOptions').show();
      } else {
        $('#shareDisplayOptions').hide();
      }
      if (trinketConfig.get('runOption')[$scope.trinket.lang]) {
        $('#shareRunOption').show();
      } else {
        $('#shareRunOption').hide();
      }
      $('#showInstructionsShareToggle').attr('checked', false);
      if ($scope.trinket.lang === 'music') {
        $('#showInstructionsShareToggle').hide();
        $('label[for=showInstructionsShareToggle]').hide();
      } else {
        $('#showInstructionsShareToggle').show();
        $('label[for=showInstructionsShareToggle]').show();
      }
      $('#runOptionLink').data('trinket-shortCode', $scope.trinket.shortCode);
      $('#runOptionLink').data('trinket-runMode', $scope.runMode);
      $('#runOptionLink').val('');
      $('#displayOptionLink').data('trinket-shortCode', $scope.trinket.shortCode);
      $('#displayOptionLink').data('trinket-runMode', $scope.runMode);
      $('#displayOptionLink').val('');
      $('#shareUrl').text($scope.shareTrinketUrl);
      // need to change display options dropdown text if blocks
      if (/blocks/.test($scope.trinket.lang)) {
        $scope.blocksOrCode = 'blocks';
      }
      // update options
      $('ul#displayOptionTextList li').each(function () {
        $(this).find('span.blocksOrCode').text($scope.blocksOrCode);
        $('#displayOptionLink option[value="' + $(this).data('value') + '"]').text($(this).text());
      });
      $('#shareModal').foundation('reveal', 'open');
    };
    $scope.embedModal = function () {
      trinketShare.resetParams();
      if (trinketConfig.get('outputOnly').indexOf($scope.trinket.lang) >= 0 || trinketConfig.get('toggleCode').indexOf($scope.trinket.lang) >= 0) {
        $('#embedDisplayOptions').show();
      } else {
        $('#embedDisplayOptions').hide();
      }
      if (trinketConfig.get('runOption')[$scope.trinket.lang]) {
        $scope.runOption = config.get('runOption')[trinket.lang];
        $('#embedRunOption').show();
      } else {
        $('#embedRunOption').hide();
      }
      $('#autorunEmbedToggle').attr('checked', false);
      if (trinketConfig.get('autorun').indexOf($scope.trinket.lang) >= 0) {
        $('#autorunEmbedToggle').show();
        $('label[for=autorunEmbedToggle]').show();
      } else {
        $('#autorunEmbedToggle').hide();
        $('label[for=autorunEmbedToggle]').hide();
      }
      $('#hideGeneratedCodeEmbedToggle').attr('checked', false);
      if (trinketConfig.get('hideGeneratedCode').indexOf($scope.trinket.lang) >= 0) {
        $('#hideGeneratedCodeEmbedToggle').show();
        $('label[for=hideGeneratedCodeEmbedToggle]').show();
      } else {
        $('#hideGeneratedCodeEmbedToggle').hide();
        $('label[for=hideGeneratedCodeEmbedToggle]').hide();
      }
      $('#showInstructionsEmbedToggle').attr('checked', false);
      if ($scope.trinket.lang === 'music') {
        $('#showInstructionsEmbedToggle').hide();
        $('label[for=showInstructionsEmbedToggle]').hide();
      } else {
        $('#showInstructionsEmbedToggle').show();
        $('label[for=showInstructionsEmbedToggle]').show();
      }
      $('#runOptionEmbed').data('trinket-shortCode', $scope.trinket.shortCode);
      $('#runOptionEmbed').data('trinket-runMode', $scope.runMode);
      $('#runOptionEmbed').val('');
      $('#displayOptionEmbed').data('trinket-shortCode', $scope.trinket.shortCode);
      $('#displayOptionEmbed').data('trinket-runMode', $scope.runMode);
      $('#displayOptionEmbed').val('');
      $('#embedCode').text($scope.shareEmbedCode);
      // need to change display options dropdown text if blocks
      if (/blocks/.test($scope.trinket.lang)) {
        $scope.blocksOrCode = 'blocks';
      }
      // update options
      $('ul#displayOptionTextList li').each(function () {
        $(this).find('span.blocksOrCode').text($scope.blocksOrCode);
        $('#displayOptionEmbed option[value="' + $(this).data('value') + '"]').text($(this).text());
      });
      $('#embedModal').foundation('reveal', 'open');
    };
    $scope.publishModal = function () {
      var slug;
      $('#slug-status').addClass('hide');
      $('#slug-status-text').empty();
      if (!$scope.trinket.slug || !$scope.trinket.slug.length) {
        slug = $scope.trinket.name.length ? getSlug($scope.trinket.name) : $scope.trinket.lang + '-' + $scope.trinket.shortCode;
        $('#published-url').empty();
        updateSlug(slug);
      } else {
        slug = $scope.trinket.slug;
        $('#slug-icon-status').removeClass().addClass('fa fa-check-circle fa-lg success');
        updateSlugUrl();
      }
      $('#publish-slug').val(slug);
      if ($scope.trinket.published) {
        $('#publishTrinket').prop('disabled', true);
        $('#publishTrinket').addClass('disabled');
        $('#publishTrinket').html('<i class="fa fa-check"></i> Published');
        $('#unpublishTrinket').prop('disabled', false);
        $('#unpublishTrinket').removeClass('disabled');
      } else {
        $('#unpublishTrinket').prop('disabled', true);
        $('#unpublishTrinket').addClass('disabled');
        $('#publishTrinket').prop('disabled', false);
        $('#publishTrinket').removeClass('disabled');
        $('#publishTrinket').html('<i class="fa fa-book"></i> Publish');
      }
      $('#publishModal').foundation('reveal', 'open');
    };
    var updateSlug = function (slug) {
      var resultClasses;
      $('#slug-icon-status').removeClass().addClass('fa fa-circle-o-notch fa-spin');
      slug = slug && slug.length ? slug : $('#publish-slug').val();
      trinketsApi.updateSlug($scope.trinket.id, slug).then(function (result) {
        var updateUrl;
        if (result.available) {
          resultClasses = 'fa fa-check-circle fa-lg success';
          $scope.trinket.slug = result.slug;
          if ($scope.trinket.username) {
            updateUrl = updateSlugUrl;
          }
          $('#slug-status').addClass('hide');
          $('#slug-status-text').empty();
          if (!$scope.trinket.published && $('#publishTrinket').hasClass('disabled')) {
            $('#publishTrinket').prop('disabled', false);
            $('#publishTrinket').removeClass('disabled');
          }
          libraryState.resetList();
        } else {
          resultClasses = 'fa fa-times-circle fa-lg alert';
          var statusText;
          if (result.status === 400) {
            statusText = 'Names can only include lowercase letters, numbers, and hyphens.';
          } else if (result.status === 409) {
            statusText = 'You have another trinket using this name.';
          } else {
            statusText = 'This name could not be used.';
          }
          $('#slug-status').removeClass('hide');
          $('#slug-status-text').text(statusText);
          if (!$scope.trinket.slug) {
            $('#publishTrinket').prop('disabled', true);
            $('#publishTrinket').addClass('disabled');
          }
        }
        setTimeout(function () {
          $('#slug-icon-status').removeClass().addClass(resultClasses);
          // if updateUrl defined
          if (typeof this === 'function') {
            this();
          }
        }.bind(updateUrl), 250);
      }, function (err) {
        console.log('here?', err);
      });
    };
    function updateSlugUrl() {
      var publishedUrl = trinketConfig.getPublishedTrinketUrl($scope.trinket.username, $scope.trinket.slug);
      $('#published-url').attr('href', publishedUrl);
      $('#published-url').text(publishedUrl);
    }
    function publishTrinket(event) {
      if (!$(this).hasClass('disabled')) {
        // if valid slug...
        trinketsApi.publish($scope.trinket.id).then(function () {
          $('#publishTrinket').prop('disabled', true);
          $('#publishTrinket').addClass('disabled');
          $('#publishTrinket').html('<i class="fa fa-check"></i> Published');
          $('#unpublishTrinket').prop('disabled', false);
          $('#unpublishTrinket').removeClass('disabled');
          $scope.trinket.published = true;
          libraryState.resetList();
        });
      }
    }
    function unpublishTrinket(event) {
      if (!$(this).hasClass('disabled')) {
        trinketsApi.unpublish($scope.trinket.id).then(function () {
          $('#unpublishTrinket').prop('disabled', true);
          $('#unpublishTrinket').addClass('disabled');
          $('#publishTrinket').prop('disabled', false);
          $('#publishTrinket').removeClass('disabled');
          $('#publishTrinket').html('<i class="fa fa-book"></i> Publish');
          $scope.trinket.published = false;
          libraryState.resetList();
        });
      }
    }
    var updateSlugOnChange = _.debounce(updateSlug, 500);
    $('#publish-slug').on('input', updateSlugOnChange);
    $('#publishTrinket').on('click', publishTrinket);
    $('#unpublishTrinket').on('click', unpublishTrinket);
    $scope.downloadTrinket = function () {
      $scope.trinketApi.onDownloadClick();
    };
    $scope.$watch('info.embedSize', function (newValue, oldValue) {
      if (newValue.height !== $scope.embedHeight) {
        $('#embed-code').removeClass($scope.embedHeightClass).addClass(newValue.class);
      }
      $scope.embedHeight = newValue.height;
      $scope.embedHeightClass = newValue.class;
      generateEmbedCode();
    });
    $scope.$watch('info.embedDisplayMenu', function (newValue, oldValue) {
      generateEmbedCode('displayOption');
    });
    $scope.$watch('info.embedRunMenu', function (newValue, oldValue) {
      generateEmbedCode('runOption');
    });
    $scope.$watch('info.embedStart', function (newValue, oldValue) {
      generateEmbedCode();
    });
    $scope.$watch('info.shareDisplayMenu', function (newValue, oldValue) {
      generateShareUrl('displayOption');
    });
    $scope.$watch('info.shareRunMenu', function (newValue, oldValue) {
      generateShareUrl('runOption');
    });
    function generateEmbedCode(calledFor) {
      var src = $scope.embedUrl, params = [], queryString = '';
      if ($scope.info.embedStart) {
        params.push('start=result');
      }
      if (calledFor === 'displayOption') {
        $scope.info.embedToggleCode = '';
        $scope.info.embedOutputOnly = '';
        if ($scope.info.embedDisplayMenu) {
          $scope.info[$scope.info.embedDisplayMenu] = true;
        }
      }
      if (calledFor === 'runOption') {
        $scope.info.embedRunOption = '';
        $scope.info.embedConsoleOption = '';
        if ($scope.info.embedRunMenu) {
          $scope.info[$scope.info.embedRunMenu] = true;
        }
      }
      if ($scope.info.embedOutputOnly) {
        params.push('outputOnly=true');
      } else if ($scope.info.embedToggleCode) {
        params.push('toggleCode=true');
      }
      if ($scope.info.embedRunOption) {
        params.push('runOption=run');
      } else if ($scope.info.embedConsoleOption) {
        params.push('runOption=console');
      }
      if ($scope.runMode) {
        params.push('runMode=' + $scope.runMode);
      }
      queryString = params.join('&');
      if (queryString.length) {
        src += '?' + queryString;
      }
      $scope.embedCode = '<iframe src="' + src + '" width="' + $scope.embedWidth + '%" height="' + $scope.embedHeight + '" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>';
      $scope.shareEmbedCode = $scope.embedCode;
      return $scope.embedCode;
    }
    function generateShareUrl(calledFor) {
      var params = [], queryString = '';
      if ($scope.trinketUrl) {
        if (calledFor === 'displayOption') {
          $scope.info.shareToggleCode = '';
          $scope.info.shareOutputOnly = '';
          if ($scope.info.shareDisplayMenu) {
            $scope.info[$scope.info.shareDisplayMenu] = true;
          }
        }
        if (calledFor === 'runOption') {
          $scope.info.shareRunOption = '';
          $scope.info.shareConsoleOption = '';
          if ($scope.info.shareRunMenu) {
            $scope.info[$scope.info.shareRunMenu] = true;
          }
        }
        if ($scope.info.shareOutputOnly) {
          params.push('outputOnly=true');
        } else if ($scope.info.shareToggleCode) {
          params.push('toggleCode=true');
        }
        if ($scope.info.shareRunOption) {
          params.push('runOption=run');
        } else if ($scope.info.shareConsoleOption) {
          params.push('runOption=console');
        }
        if ($scope.runMode) {
          params.push('runMode=' + $scope.runMode);
        }
        queryString = params.join('&');
        if ($scope.trinketUrl.indexOf('?') > 0) {
          $scope.trinketUrl = $scope.trinketUrl.substring(0, $scope.trinketUrl.indexOf('?'));
        }
        if (queryString.length) {
          $scope.trinketUrl += '?' + queryString;
        }
        $scope.shareTrinketUrl = $scope.trinketUrl;
        if (window.addthis && window.addthis.toolbox) {
          window.addthis.toolbox('#addthis_buttons', {}, { url: $scope.trinketUrl });
        }
      }
    }
    $scope.copyToClipboard = function (code) {
      $('#copiedMessage').trigger('mouseenter.fndtn.tooltip');
      timers.copy = $timeout(function () {
        $('#copiedMessage').trigger('mouseleave.fndtn.tooltip');
        delete timers.copy;
      }, 3000, false);
      return code;
    };
    function setTrinket(trinket) {
      $state.go('detail.embed');
      $document[0].title = trinket.name || 'Untitled ' + trinket.lang + ' trinket';
      $scope.canSave = true;
      $scope.isOwner = trinket._owner === $('#userdata').data('user-id');
      $scope.trinket = trinket;
      $scope.trinketUrl = $scope.shareTrinketUrl = config.getUrl(trinket.lang + '/' + $stateParams.shortCode);
      $scope.embedUrl = config.getUrl('embed/' + trinket.lang + '/' + $stateParams.shortCode);
      $scope.iframeUrl = $scope.embedUrl + '?noSharing=true&noStorage=true&inLibrary=true' + ($stateParams.go ? '&start=result' : '') + ($stateParams._3d ? '&_3d=true' : '');
      $scope.timeSinceSave = moment(trinket.lastUpdated).fromNow();
      var permission = [
          'create',
          $scope.trinket.lang,
          'trinket'
        ].join('-');
      if (roles.hasPermission(permission)) {
        $scope.canCopy = true;
      }
      if (config.get('autorun').indexOf(trinket.lang) >= 0) {
        $scope.autorunOption = true;
      }
      if (config.get('outputOnly').indexOf(trinket.lang) >= 0) {
        $scope.outputOnlyOption = true;
      }
      if (config.get('toggleCode').indexOf(trinket.lang) >= 0) {
        $scope.toggleCodeOption = true;
      }
      if (config.get('runOption')[trinket.lang]) {
        $scope.runOption = config.get('runOption')[trinket.lang];
      }
      $scope.extraOptions = $scope.autorunOption || $scope.outputOnlyOption || $scope.toggleCodeOption;
      if (config.get('downloadable').indexOf(trinket.lang) >= 0) {
        $scope.downloadable = true;
      }
      if ($scope.externalInit) {
        $scope.iframeUrl += '&externalInit=true';
      }
      if (trinket.lang === 'music') {
        $scope.info.embedSize = $scope.embedSizes[1];
      }
      $('#runOptionLink').val('');
      $('#runOptionEmbed').val('');
      $('#displayOptionLink').val('');
      $('#displayOptionEmbed').val('');
      generateEmbedCode();
      trinketGroups.trinketGroups({ id: $scope.trinket.id }, function (groups) {
        if (groups.length) {
          $scope.groups = groups;
        }
      });
      if ($scope.trinket.folder && $scope.trinket.folder.folderId) {
        $scope.trinketInFolder = true;
      }
    }
    $scope.$watch('trinketApi', function (newValue, oldValue) {
      if (newValue) {
        if ($scope.externalInit) {
          newValue.initialize(libraryState.lastTrinket);
        }
        $scope.isModified = newValue.isDirty() || newValue.viewingDraft();
        $scope.apiReady = true;
        $scope.saveError = false;
      }
    });
    $scope.$watch('runMode', function (newValue, oldValue) {
      generateShareUrl();
      generateEmbedCode();
    });
    var matchingTrinkets = $filter('filter')(libraryState.trinkets || [], { shortCode: $stateParams.shortCode }, true);
    if (matchingTrinkets.length) {
      setTrinket(matchingTrinkets[0]);
    } else {
      trinketsApi.getOne($stateParams.shortCode).then(setTrinket);
    }
    if (!$scope.folders) {
      foldersApi.getList().then(function (folders) {
        $scope.folders = folders;
      });
    }
  }
]);TrinketIO.export('library.trinkets.detail.interactions.controller', [
  '$scope',
  '$stateParams',
  'Restangular',
  'trinketUtil',
  function ($scope, $stateParams, Restangular, trinketUtil) {
    $scope.interactions = undefined;
    $scope.interactionMap = {
      'embedViews': 'Viewed',
      'linkViews': 'Viewed',
      'emailViews': 'Viewed',
      'embedShares': 'Shared',
      'linkShares': 'Shared',
      'emailShares': 'Shared',
      'runs': 'Interacted with',
      'forks': 'Modification made'
    };
    var parser = document.createElement('a');
    Restangular.one('trinkets', $stateParams.shortCode).getList('interactions').then(function (interactions) {
      $scope.interactions = [];
      angular.forEach(interactions.reverse(), function (interaction) {
        // get timestamp portion of mongo id
        interaction.interacted = parseInt(interaction.id.slice(0, 8), 16) * 1000;
        if (interaction.referer) {
          parser.href = interaction.referer;
          interaction.referer_host = parser.hostname;
        }
        $scope.interactions.push(interaction);
      });
    });
  }
]);TrinketIO.export('library.trinkets.list.controller', [
  '$scope',
  '$state',
  '$stateParams',
  '$window',
  '$timeout',
  '$filter',
  '$http',
  'trinketConfig',
  'trinketUtil',
  'trinketsApi',
  'libraryState',
  'foldersApi',
  function ($scope, $state, $stateParams, $window, $timeout, $filter, $http, trinketConfig, trinketUtil, trinketsApi, libraryState, foldersApi) {
    var allLoaded = false, loading = false, cache = TrinketIO.import('utils.cache'), last, lastCount;
    if (libraryState.userParam && !$stateParams.user) {
      libraryState.resetList();
    }
    $scope.viewType = cache.get('library-view-type') || 'large';
    $scope.items = libraryState.trinkets;
    $scope.folders = libraryState.folders;
    $scope.sortBy = cache.get('library-sort-by') || libraryState.listParams.sort;
    last = libraryState.listParams.from;
    lastCount = libraryState.listParams.offset;
    $scope.userParam = $stateParams.user || '';
    // shared between this controller and trinket.search directive
    $scope.searchInputOpen = false;
    $scope.initSort = function (sortBy) {
      libraryState.resetList();
      $scope.sortBy = sortBy;
      $scope.items = undefined;
      allLoaded = false;
      last = undefined;
      lastCount = 0;
      $scope.moreTrinkets();
    };
    $scope.changeView = function (viewType) {
      $scope.viewType = viewType;
    };
    $scope.gotoFolder = function (slug) {
      $state.go('folderList', { slug: slug });
    };
    $scope.gotoTrinket = function (shortCode) {
      $state.go('detail', { shortCode: shortCode });
    };
    $scope.gotoSelectedTrinket = function (item) {
      $state.go('detail', { shortCode: item.shortCode });
    };
    $scope.sortOptions = {
      '-lastUpdated': {
        label: 'Last Updated',
        class: 'fa fa-floppy-o fa-fw'
      },
      '-lastView.viewedOn': {
        label: 'Last Viewed',
        class: 'fa fa-eye fa-fw'
      },
      '-totalViews': {
        label: 'Most Viewed',
        class: 'fa fa-sort-numeric-desc fa-fw'
      },
      'name': {
        label: 'Name',
        class: 'fa fa-sort-alpha-asc fa-fw'
      }
    };
    $scope.viewOptions = {
      'large': {
        label: 'Grid',
        class: 'fa fa-th-large fa-fw'
      },
      'list': {
        label: 'List',
        class: 'fa fa-th-list fa-fw'
      }
    };
    $scope.dragging = null;
    $scope.overFolder = false;
    Sortable.create($('#trinkets-list').get(0), {
      sort: false,
      filter: '.a-folder',
      scroll: true,
      dragoverBubble: true,
      chosenClass: 'dragging-trinket',
      onStart: function (evt) {
        $scope.dragging = $(evt.item).data('id');
        $scope.overFolder = false;
      },
      onEnd: function (evt) {
        if ($scope.overFolder && $scope.dragging) {
          var moveTrinket = $filter('filter')($scope.items || [], { id: $scope.dragging });
          var toFolder = $filter('filter')($scope.folders, { id: $scope.overFolder })[0];
          if (moveTrinket.length) {
            moveTrinket[0].addToFolder({ folderId: $scope.overFolder }).then(function () {
              // remove trinket from items
              var moveIndex = $scope.items.indexOf(moveTrinket[0]);
              $scope.items.splice(moveIndex, 1);
              // update folder.trinketCount
              toFolder.trinketCount++;
              libraryState.resetList();
            });
          }
        }
        if ($scope.overFolder) {
          $('[data-id="' + $scope.overFolder + '"]').removeClass('folder-dropzone');
        }
        $scope.dragging = null;
        $scope.overFolder = false;
      }
    });
    $(document).on('dragover', function (event) {
      event.stopPropagation();
      var currentFolder = $scope.overFolder;
      if ($(event.target).is('li.a-folder')) {
        $scope.overFolder = $(event.target).data('id');
      } else if ($(event.target).parents('li.a-folder').length) {
        $scope.overFolder = $(event.target).parents('li.a-folder').data('id');
      }
      if ($scope.overFolder) {
        if (currentFolder) {
          $('[data-id="' + currentFolder + '"]').removeClass('folder-dropzone');
        }
        $('[data-id="' + $scope.overFolder + '"]').addClass('folder-dropzone');
      }
    });
    $(document).on('dragleave', function (event) {
      event.stopPropagation();
      if ($scope.overFolder && $(event.target).is('li.a-folder') && !$(event.target).parents('li.a-folder').length) {
        $('[data-id="' + $scope.overFolder + '"]').removeClass('folder-dropzone');
        $scope.overFolder = false;
      }
    });
    $('#library-sort-options').on('opened.fndtn.dropdown', function () {
      var h = $('#listview-options').outerHeight();
      $(this).css('top', h + 'px');
    });
    $('#library-view-options').on('opened.fndtn.dropdown', function () {
      var h = $('#listview-options').outerHeight();
      $(this).css('top', h + 'px');
    });
    $scope.$on('$destroy', function () {
      libraryState.listParams = {
        sort: $scope.sortBy,
        from: last,
        offset: lastCount
      };
      libraryState.scrollPos = $($window).scrollTop();
      libraryState.trinkets = $scope.items;
      libraryState.folders = $scope.folders;
      libraryState.lastTrinket = undefined;
      if ($stateParams.user) {
        libraryState.userParam = $stateParams.user;
      }
    });
    $scope.folderMessage = function (message, type) {
      if (type === 'success') {
        $('#new-folder-modal').foundation('reveal', 'close');
      } else {
        $('#new-folder-messages').notify(message, { className: type });
      }
    };
    $scope.$watch('viewType', function (newValue, oldValue) {
      cache.set('library-view-type', newValue);
    });
    $scope.$watch('sortBy', function (newValue, oldValue) {
      cache.set('library-sort-by', newValue);
    });
    $scope.moreTrinkets = function () {
      var self = this, trinketParams = { limit: 20 };
      if (allLoaded || loading) {
        return;
      }
      loading = true;
      if (last != null && last != undefined) {
        trinketParams.from = last.toString().length ? last : '~~~';
      }
      if (lastCount) {
        trinketParams.offset = lastCount;
      }
      if ($scope.sortBy) {
        trinketParams.sort = $scope.sortBy;
      }
      if ($stateParams.user) {
        trinketParams.user = $stateParams.user;
      }
      var prop = $scope.sortBy.charAt(0) === '-' ? $scope.sortBy.substr(1) : $scope.sortBy;
      var propMap = { totalViews: 'metrics.views' };
      if (propMap[prop]) {
        prop = propMap[prop];
      }
      // to retrieve metrics
      trinketsApi.getList(trinketParams).then(function (trinkets) {
        if (!$scope.items) {
          $scope.items = [];
        }
        angular.forEach(trinkets, function (trinket) {
          var value;
          $scope.items.push(trinket);
          value = trinketUtil.getProperty(trinket, prop);
          if (value != null && last !== value) {
            last = value;
            lastCount = 0;
          }
          lastCount++;
        });
        loading = false;
        if (trinkets.length < trinketParams.limit) {
          allLoaded = true;
        }
        $timeout(function () {
          $(document).foundation();
        }, 0, false);
      });
    };
    if (!$scope.items) {
      var folderParams = {};
      if ($stateParams.user) {
        folderParams.user = $stateParams.user;
      }
      foldersApi.getList(folderParams).then(function (folders) {
        $scope.folders = folders;
        $scope.moreTrinkets();
      });
    }
    if (libraryState.scrollPos) {
      $timeout(function () {
        $($window).scrollTop(libraryState.scrollPos);
      });
    }
  }
]);TrinketIO.export('library.trinkets.list.folderController', [
  '$scope',
  '$document',
  '$location',
  '$state',
  '$stateParams',
  '$window',
  '$timeout',
  '$filter',
  '$q',
  'trinketConfig',
  'trinketUtil',
  'trinketsApi',
  'libraryState',
  'foldersApi',
  function ($scope, $document, $location, $state, $stateParams, $window, $timeout, $filter, $q, trinketConfig, trinketUtil, trinketsApi, libraryState, foldersApi) {
    var allLoaded = false, loading = false, cache = TrinketIO.import('utils.cache'), gotInitialItems = false, originalTitle = $document[0].title, last, lastCount;
    $scope.viewType = cache.get('library-view-type') || 'large';
    $scope.folders = libraryState.folders;
    $scope.items = null;
    $scope.listParams = libraryState.defaultFolderListParams;
    $scope.sortBy = cache.get('library-sort-by') || $scope.listParams.sort;
    last = $scope.listParams.from;
    lastCount = $scope.listParams.offset;
    $scope.notConfirmed = true;
    $scope.confirmFolderName = '';
    $scope.gotoTrinket = function (shortCode) {
      $state.go('detail', { shortCode: shortCode });
    };
    $scope.moreTrinkets = function () {
      var self = this, trinketParams = { limit: 20 };
      if (allLoaded || loading) {
        return;
      }
      if ($scope.folder) {
        if (gotInitialItems) {
          gotInitialItems = false;
          return;
        }
        loading = true;
        if (last != null && last != undefined) {
          trinketParams.from = last.toString().length ? last : '~~~';
        }
        if (lastCount) {
          trinketParams.offset = lastCount;
        }
        if ($scope.sortBy) {
          trinketParams.sort = $scope.sortBy;
        }
        if ($stateParams.user) {
          trinketParams.user = $stateParams.user;
        }
        var prop = $scope.sortBy.charAt(0) === '-' ? $scope.sortBy.substr(1) : $scope.sortBy;
        var propMap = { totalViews: 'metrics.views' };
        if (propMap[prop]) {
          prop = propMap[prop];
        }
        $scope.folder.customGETLIST('trinkets', trinketParams).then(function (trinkets) {
          if (!$scope.items) {
            $scope.items = [];
          }
          angular.forEach(trinkets, function (trinket) {
            var value;
            trinketsApi.augmentTrinket(trinket);
            $scope.items.push(trinket);
            value = trinketUtil.getProperty(trinket, prop);
            if (value != null && last !== value) {
              last = value;
              lastCount = 0;
            }
            lastCount++;
          });
          loading = false;
          if (trinkets.length < trinketParams.limit) {
            allLoaded = true;
          }
          $timeout(function () {
            $(document).foundation();
          }, 0, false);
        });
      }
    };
    // if no folders stored in libraryState
    if (!$scope.folders) {
      foldersApi.getList().then(function (folders) {
        $scope.folders = [];
        angular.forEach(folders, function (folder) {
          $scope.folders.push(folder);
        });
        setFolder();
        $scope.moreTrinkets();
      });
    } else {
      setFolder();
      // try to get items (trinkets) from libraryState
      if (libraryState.trinketsByFolder && libraryState.trinketsByFolder[$scope.folder.id]) {
        $scope.items = libraryState.trinketsByFolder[$scope.folder.id];
      }
      if (libraryState.folderListParams && libraryState.folderListParams[$scope.folder.id]) {
        $scope.listParams = libraryState.folderListParams[$scope.folder.id];
        last = $scope.listParams.from;
        lastCount = $scope.listParams.offset;
      }
      // get items (trinkets) from server
      if (!$scope.items) {
        $scope.moreTrinkets();
      } else {
        gotInitialItems = true;
      }
    }
    $scope.$on('$destroy', function () {
      libraryState.folders = $scope.folders;
      if (!libraryState.trinketsByFolder) {
        libraryState.trinketsByFolder = {};
      }
      libraryState.trinketsByFolder[$scope.folder.id] = $scope.items;
      if (!libraryState.folderListParams) {
        libraryState.folderListParams = {};
      }
      libraryState.folderListParams[$scope.folder.id] = {
        sort: $scope.sortBy,
        from: last,
        offset: lastCount,
        scrollPos: $($window).scrollTop()
      };
      $document[0].title = originalTitle;
    });
    function setFolder() {
      var found = $filter('filter')($scope.folders, { slug: $stateParams.slug }, true), userId = $('#userdata').data('user-id'), folderOwner;
      if (found[0]) {
        $scope.folder = found[0];
        folderOwner = $scope.folder._owner || $scope.folder._owner.id;
        $scope.isOwner = folderOwner === userId;
        $document[0].title = $scope.folder.name;
      } else {
        $state.go('list');
      }
    }
    $scope.updateName = function (value) {
      var deferred = $q.defer();
      if (value !== $scope.folder.name) {
        foldersApi.updateName($scope.folder.id, { name: value }).then(function (result) {
          if (result.success) {
            var newValue = result.folder.slug;
            $filter('filter')($scope.folders, { slug: $stateParams.slug })[0].slug = newValue;
            libraryState.resetList();
            $state.go('folderList', { slug: newValue }, { location: 'replace' });
            return deferred.resolve();
          } else if (result.message) {
            $('#folder-list-messages').notify(result.message, { className: 'alert' });
            return deferred.reject();
          }
        }, function (err) {
          return deferred.reject();
        });
        return deferred.promise;
      }
      return deferred.resolve();
    };
    $scope.compareNamesForDelete = function (inputName) {
      if (inputName === $scope.folder.name) {
        $scope.notConfirmed = false;
      } else {
        $scope.notConfirmed = true;
      }
    };
    $scope.remove = function () {
      if (!$scope.notConfirmed) {
        $scope.folder.remove().then(function () {
          $scope.closeDeleteModal();
          libraryState.resetList();
          $state.go('list');
        });
      }
    };
    $scope.addSelectedTrinket = function (trinket) {
      var inFolder = $filter('filter')($scope.items || [], { id: trinket.id });
      // don't add trinket if it's already in this folder
      if (!inFolder.length) {
        trinket.addToFolder({ folderId: $scope.folder.id }).then(function () {
          $scope.items.push(trinket);
          $scope.folder.trinketCount++;
          libraryState.resetList();
        });
      }
    };
  }
]);TrinketIO.export('library.trinkets.copy.controller', [
  '$scope',
  '$state',
  '$stateParams',
  'libraryState',
  '$window',
  '$timeout',
  'trinketRoles',
  function ($scope, $state, $stateParams, libraryState, $window, $timeout, roles) {
    var source = libraryState.lastTrinket;
    if (!source) {
      // load trinket by shortCode if libraryState.lastTrinket isn't defined?
      return $state.go('create', { lang: 'python' });
    }
    // will be set by embed directive
    $scope.trinketApi = null;
    $scope.name = source.name;
    $scope.lang = source.lang;
    $scope.shortCode = source.shortCode;
    $scope.canSave = false;
    $scope.runMode = '';
    $scope.iframeUrl = '/embed/' + source.lang + '?noSharing=true&noStorage=true&externalInit=true&inLibrary=true';
    if ($scope.name && $scope.name.length) {
      // Make sure generated name can't exeed 50 characters. Align this with e-maxlength values in create.html, detail.html, copy.html
      $scope.name = 'Copy of ' + source.name.substring(0, Math.min(source.name.length, 42));
    }
    var permission = [
        'create',
        source.lang,
        'trinket'
      ].join('-');
    if (roles.hasPermission(permission)) {
      $scope.canSave = true;
    }
    var persist = function () {
      libraryState.resetList();
      var data = $scope.trinketApi.serialize();
      data.name = $scope.name;
      data.description = source.description;
      $scope.trinketApi.fork(source, data, { library: true }, function (trinket) {
        libraryState.lastTrinket = trinket;
        $scope.trinketApi.destroy();
        $state.go('detail', { shortCode: trinket.shortCode }, { location: 'replace' });
      });
    };
    $scope.cancel = function () {
      $scope.trinketApi.destroy();
      $state.go('detail', { shortCode: $scope.shortCode });
    };
    $scope.save = function () {
      // delay the actual save to allow the current digest to complete
      // since the user may have had focus in the name field
      $timeout(persist);
    };
    $scope.$watch('trinketApi', function (newValue, oldValue) {
      if (newValue) {
        newValue.initialize(source);
      }
    });
  }
]);(function (angular) {
  angular.module('trinket.components.trinkets', ['restangular']);
}(window.angular));(function (angular, module) {
  function EmbedApi($window, $rootScope) {
    return {
      restrict: 'AC',
      scope: {
        isModified: '=',
        api: '=',
        runMode: '='
      },
      link: function (scope, element, attrs) {
        scope.loadedTrinketApp = false;
        var unsavedChangesMessage = 'You have unsaved changes, are you sure you want to leave this page?';
        var draftMessage = 'A draft of your changes has been saved but others will not see them when you share unless you click Save. Are you sure you want to leave this page?';
        var exitEvents = [
            '$stateChangeStart',
            '$locationChangeStart'
          ];
        var registeredEvents = [];
        var canCreate = attrs.canCreate === 'true';
        angular.forEach(exitEvents, function (eventName) {
          registeredEvents.push($rootScope.$on(eventName, function (event, toState, toParams, fromState, fromParams) {
            if (toState && fromState && toState.name && fromState.name) {
              if (toState.name.split('.')[0] === fromState.name.split('.')[0]) {
                // state change was for a sub-state so no need to warn user
                return;
              }
            }
            if (canCreate && scope.api && scope.api.isDirty()) {
              var confirmMessage = unsavedChangesMessage;
              if (scope.api._trinket && scope.api._trinket.id) {
                scope.api._updateDraft();
                confirmMessage = draftMessage;
              }
              if (!confirm(confirmMessage)) {
                event.preventDefault();
              }
            }
          }));
        });
        $window.onbeforeunload = function () {
          var unloadMessage = unsavedChangesMessage;
          if (canCreate && scope.api && scope.api.isDirty()) {
            if (scope.api._trinket && scope.api._trinket.id) {
              scope.api._updateDraft();
              unloadMessage = draftMessage;
            }
            return unloadMessage;
          }
        };
        scope.$on('$destroy', function () {
          if (scope.api) {
            scope.api.off('trinket.code.change', onChange);
            scope.api.off('trinket.runMode.change', runModeChange);
          }
          angular.forEach(registeredEvents, function (handler) {
            handler();
          });
          window.onbeforeunload = undefined;
          $window.removeEventListener('message', messageHandler);
        });
        var onChange = function () {
          scope.isModified = true;
          scope.$apply();
        };
        var runModeChange = function (event, opt) {
          scope.runMode = opt.runMode || '';
          scope.$apply();
        };
        function messageHandler(ev) {
          if (ev.data && ev.data === 'TrinketApp ready') {
            loadTrinketApp();
          }
        }
        $window.addEventListener('message', messageHandler);
        function loadTrinketApp() {
          var win = element[0].contentWindow || element[0].contentDocument;
          if (win && win.TrinketApp && !scope.loadedTrinketApp) {
            scope.api = win.TrinketApp;
            win.TrinketApp.on('trinket.code.change', onChange);
            win.TrinketApp.on('trinket.runMode.change', runModeChange);
            scope.loadedTrinketApp = true;
            scope.$apply();
          }
        }
      }
    };
  }
  module.directive('embedApi', [
    '$window',
    '$rootScope',
    EmbedApi
  ]);
}(window.angular, window.angular.module('trinket.components.trinkets')));(function (angular, module) {
  function TrinketService(Restangular) {
    var _all = Restangular.all('trinkets');
    var augmentTrinket = function augmentTrinket(trinket) {
      if (trinket.metrics) {
        trinket.metrics.social = (trinket.metrics.emailShares || 0) + (trinket.metrics.linkShares || 0) + (trinket.metrics.embedShares || 0);
        trinket.metrics.views = (trinket.metrics.embedViews || 0) + (trinket.metrics.linkViews || 0) + (trinket.metrics.emailViews || 0);
      }
      return trinket;
    };
    this.augmentTrinket = augmentTrinket;
    // get a list of trinkets
    this.getList = function getTrinketList(options) {
      return _all.getList(options).then(function (trinkets) {
        angular.forEach(trinkets, augmentTrinket);
        return trinkets;
      });
    };
    this.getOne = function getTrinketById(id) {
      return _all.one(id).get().then(function (trinket) {
        // we may have retrieved the element by shortCode
        // in which case we need to re-restangularize
        // so that id is used for subsequent methods
        var plain = Restangular.stripRestangular(trinket);
        restangularized = Restangular.restangularizeElement(null, plain, 'trinkets');
        return augmentTrinket(restangularized);
      });
    };
    this.updateName = function (id, data) {
      return _all.one(id).customPUT(data, 'name');
    };
    this.takeSnapshot = function (id) {
      return _all.one(id).takeSnapshot();
    };
    this.search = function (q) {
      return _all.customGETLIST('search', { q: q });
    };
    this.updateSlug = function (id, slug) {
      return _all.one(id).customPUT({ slug: slug.trim() }, 'slug').then(function (data) {
        return {
          available: true,
          slug: slug
        };
      }, function (res) {
        return {
          available: false,
          status: res.status
        };
      });
    };
    this.publish = function (id) {
      return _all.one(id).customPUT({ published: true }, 'published');
    };
    this.unpublish = function (id) {
      return _all.one(id).customPUT({ published: false }, 'published');
    };
  }
  module.service('trinketsApi', [
    'Restangular',
    TrinketService
  ]);
}(window.angular, window.angular.module('trinket.components.trinkets')));(function (angular) {
  angular.module('trinket.library.components.state', []);
}(window.angular));(function (angular, module) {
  module.factory('libraryState', function () {
    return {
      trinkets: undefined,
      listParams: {
        sort: '-lastUpdated',
        from: undefined,
        offset: 0
      },
      scrollPos: 0,
      folders: undefined,
      trinketsByFolder: undefined,
      defaultFolderListParams: {
        sort: '-lastUpdated',
        from: undefined,
        offset: 0,
        scrollPos: 0
      },
      folderListParams: undefined,
      userParam: undefined,
      resetList: function () {
        this.scrollPos = 0;
        this.folders = undefined;
        this.trinkets = undefined;
        this.trinketsByFolder = undefined;
        this.folderListParams = undefined;
        this.listParams.from = undefined;
        this.listParams.offset = 0;
        this.userParam = undefined;
      },
      lastTrinket: undefined
    };
  });
}(window.angular, window.angular.module('trinket.library.components.state')));(function (angular) {
  angular.module('trinket.components.folders', ['restangular']);
}(window.angular));(function (angular, module) {
  function FolderService(Restangular) {
    this.getList = function (options) {
      return Restangular.all('folders').getList(options);
    };
    this.updateName = function (id, data) {
      return Restangular.all('folders').one(id).customPUT(data, 'name');
    };
  }
  module.service('foldersApi', [
    'Restangular',
    FolderService
  ]);
}(window.angular, window.angular.module('trinket.components.folders')));(function (angular, module) {
  function NewFolder(Restangular) {
    return {
      restrict: 'A',
      link: function ($scope, element, attrs) {
        $scope.isSubmitting = false;
        element.on('submit', function (event) {
          event.preventDefault();
        });
        $scope.addNewFolder = function () {
          var messageFunc = typeof $scope.folderMessage === 'function' ? $scope.folderMessage : function () {
            };
          $scope.isSubmitting = true;
          $scope.folders.post({ name: $scope.name }).then(function (response) {
            if (response.success) {
              $scope.folders.push(Restangular.restangularizeElement(null, response.folder, 'folders'));
              messageFunc('New folder created.', 'success');
              $scope.name = '';
            } else if (response.message) {
              messageFunc(response.message, 'alert');
            } else {
              messageFunc('We had a problem creating your new folder. Please try again.', 'alert');
            }
            $scope.isSubmitting = false;
          }, function (err) {
            if (err.message) {
              messageFunc(err.message, 'alert');
            } else {
              messageFunc('We had a problem creating your new folder. Please try again.', 'alert');
            }
            $scope.isSubmitting = false;
          });
        };
      }
    };
  }
  module.directive('newFolder', [
    'Restangular',
    NewFolder
  ]);
}(window.angular, window.angular.module('trinket.components.folders')));angular.module('trinket.library', [
  'trinket.config',
  'trinket.util',
  'ui.router',
  'restangular',
  'infinite-scroll',
  'ngAnimate',
  'xeditable',
  'trinket.components.foundation',
  'trinket.components.trinkets',
  'trinket.components.folders',
  'trinket.library.components.state',
  'urish.load',
  'trinket.lang',
  'trinket.roles',
  'trinket.groups',
  'trinket.search',
  'trinket.share',
  'ngTextSelect',
  'mm.foundation'
]).config([
  '$locationProvider',
  '$stateProvider',
  'RestangularProvider',
  function ($locationProvider, $stateProvider, RestangularProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);
    RestangularProvider.setBaseUrl('/api');
    RestangularProvider.addResponseInterceptor(function (response) {
      return response.data ? response.data : response;
    });
    RestangularProvider.setDefaultHeaders({ 'Content-Type': 'application/json' });
    RestangularProvider.addElementTransformer('trinkets', false, function (trinket) {
      if (trinket.id) {
        // allow admin to force a new snapshot
        trinket.addRestangularMethod('takeSnapshot', 'post', 'snapshot');
        // custom method to add this trinket to a folder
        trinket.addRestangularMethod('addToFolder', 'post', 'folder');
        // custom method to remove this trinket from a folder
        trinket.addRestangularMethod('removeFromFolder', 'remove', 'folder');
      }
      return trinket;
    });
    $stateProvider.state('list', {
      url: '/trinkets?user',
      templateUrl: trinketConfig.prefix('/js/library/trinkets/list/list.html'),
      controller: TrinketIO.import('library.trinkets.list.controller')
    }).state('folderList', {
      url: '/folder/:slug?user',
      templateUrl: trinketConfig.prefix('/js/library/trinkets/list/folder.html'),
      controller: TrinketIO.import('library.trinkets.list.folderController')
    }).state('create', {
      url: '/trinkets/create?lang',
      templateUrl: trinketConfig.prefix('/js/library/trinkets/create/create.html'),
      controller: TrinketIO.import('library.trinkets.create.controller'),
      resolve: {
        examples: [
          '$http',
          '$stateParams',
          function ($http, $stateParams) {
            return $http({
              method: 'GET',
              url: '/api/trinkets/' + $stateParams.lang + '/list?name=examples'
            });
          }
        ]
      }
    }).state('copy', {
      url: '/trinkets/copy/:shortCode',
      templateUrl: trinketConfig.prefix('/js/library/trinkets/copy/copy.html'),
      controller: TrinketIO.import('library.trinkets.copy.controller'),
      resolve: {
        source: [
          'libraryState',
          'trinketsApi',
          '$stateParams',
          function (libraryState, trinketsApi, $stateParams) {
            if (libraryState.lastTrinket && libraryState.lastTrinket.shortCode === $stateParams.shortCode) {
              return libraryState.lastTrinket;
            } else {
              return trinketsApi.getOne($stateParams.shortCode).then(function (trinket) {
                libraryState.lastTrinket = trinket;
                return trinket;
              });
            }
          }
        ]
      }
    }).state('detail', {
      url: '/trinkets/:shortCode?go&_3d',
      templateUrl: trinketConfig.prefix('/js/library/trinkets/detail/detail.html'),
      controller: TrinketIO.import('library.trinkets.detail.controller')
    }).state('detail.description', { views: { 'description': { templateUrl: trinketConfig.prefix('/js/library/trinkets/detail/description.html') } } }).state('detail.embed', { views: { 'embed': { templateUrl: trinketConfig.prefix('/js/library/trinkets/detail/embed.html') } } }).state('detail.interactions', {
      views: {
        'interactions': {
          templateUrl: trinketConfig.prefix('/js/library/trinkets/detail/interactions/interactions.html'),
          controller: TrinketIO.import('library.trinkets.detail.interactions.controller')
        }
      }
    }).state('detail.share', {
      views: {
        'share': {
          templateUrl: trinketConfig.prefix('/js/library/trinkets/detail/share.html'),
          resolve: {
            lang: [
              'trinketsApi',
              '$stateParams',
              function (trinketsApi, $stateParams) {
                return trinketsApi.getOne($stateParams.shortCode).then(function (trinket) {
                  return trinket.lang;
                });
              }
            ]
          },
          controller: function ($scope, lang) {
            lang = lang || 'python';
            if (window.addthis) {
              var addthis_config = {
                  'data_track_addressbar': true,
                  'data_track_clickback': false
                };
              var addthis_share = {
                  url: $scope.trinketUrl,
                  passthrough: {
                    twitter: {
                      related: 'trinketapp,hauspoor',
                      text: 'I\'m creating interactive #' + lang + ' with Trinket. #TeachWithCode'
                    }
                  },
                  url_transforms: { shorten: { twitter: 'bitly' } },
                  shorteners: { bitly: {} }
                };
              window.addthis.toolbox('#addthis_buttons', addthis_config, addthis_share);
            }
          }
        }
      }
    });
  }
]).run([
  '$rootScope',
  'editableOptions',
  function ($rootScope, editableOptions) {
    editableOptions.buttons = 'default';
    $rootScope.$on('$viewContentLoaded', function () {
      $(document).foundation();
    });
  }
]);