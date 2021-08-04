function newItem(){


//1.Adding new item to the list of items:
  let li= $('<li></li>');
  let inputValue = $('#input').val();
  li.append(document.createTextNode(inputValue));

  if (inputValue === '') {
    alert ('You must write something!');
  } else {
    let list = $('#list');
    list.append(li)
  }

  //2. Crossing Out and item from the list of items:
  function crossOut() {
    li.addClass('strike');
  };
  li.on('dblclick', function (crossOut) {
    li.addClass('strike');
  });

  //3.(i). Adding the delete button "X";
  let crossOutButton = $('<button class ="crossOutButton">x</button>');
  li.append(crossOutButton);

  //3.(ii) Adding class delete (display:none) from the css:
  crossOutButton.on('click', function(deleteListItem) {
    li.addClass('delete');
  });

  //4. Reordering items:
  $('#list').sortable();
}
