


// input.keydown(function(e) {
//     if (e.keyCode == 13) {
//         e.preventDefault();
//         $(this).val('');
//         return false;
//     }
// }


// dragula([document.getElementById(left), document.getElementById(right)]);




// dragula(container1, container2, {
//   moves: function (el, container) {
//     return true;         // elements are always draggable by default
//   },
//   accepts: function (el, target, source, sibling) {
//     return true;         // elements can be dropped in any of the `containers` by default
//   },
//   direction: 'vertical', // Y axis is considered when determining where an element would be dropped
//   copy: false,           // elements are moved by default, not copied
//   revertOnSpill: false,  // spilling will put the element back where it was dragged from, if this is true
//   removeOnSpill: false   // spilling will `.remove` the element, if this is true
// });



function $(id) {
  return document.getElementById(id);
}

dragula([$('drag-elements'), $('drop-target')], {
  revertOnSpill: true
}).on('drop', function(el) {
  if ($('drop-target').children.length > 0) {
    $('display').innerHTML = $('drop-target').innerHTML;
  } else {
    $('display').innerHTML = "Display";
  }

});