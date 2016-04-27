(function () 
 
 'use stricts';
    var autoInput = document.querySelector('.auto-input'),
        arrow = document.querySelector('.carat'),
        list = document.querySelector('.hidden'),
        boxes = document.querySelectorAll('.hidden li input'),
        liveFilter;
    
    autoInput.addEventListener('focus', function () {
        list.classList.remove('hidden');
    });
    
    list.addEventListener('mouseleave', function () {
        list.classList.add('hidden');
    });
    
    arrow.addEventListener('click', function () {
        list.classList.remove('hidden');
    });
    

    
    liveFilter = (function () {
        function liveFilter(searchFieldId, listId, options) {

    var searchField = document.querySelector(searchFieldId),
        list = document.getElementById(listId),
        selector,
        filterClass;

  
    if (options !== undefined) {
      selector = options.selector;
      filterClass = options.filterClass;

      

      
    }

    if (filterClass === undefined) {
      filterClass = "hidden";
    }

    var handler = function searchFieldChanged() {
      var text = this.value,
          regexp = RegExp(text, 'i'),
          nodes = (selector === undefined) ? list.children
                                           : list.querySelectorAll(selector),
          filteredNodesCount = 0,
          node;

      for (var i = 0, nodesLength = nodes.length; i < nodesLength; i++) {
        node = nodes[i];

        if (node.textContent.search(regexp) < 0) {
          filteredNodesCount += 1;
          node.classList.add(options.filterClass);
        }
        else {
          node.classList.remove(options.filterClass);
        }

      }
    };

    searchField.addEventListener("input", handler, false);
  }

  return liveFilter
    }());
    
    liveFilter('.auto-input', 'list', {
        selector: 'li',
        filterClass: 'hidden'
    });
    
        
    for (var i = 0; i < boxes.length; i++) {
        console.log(boxes[i]);
       boxes[i].addEventListener('change', function () {
           console.log(boxes[i] + ' checked');
           
       });
    }
    
    autoInput.value = 8 + "Brands Selected!"
}());
