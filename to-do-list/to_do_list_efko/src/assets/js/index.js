document.addEventListener('DOMContentLoaded', (event) => {

    const draggables = document.querySelectorAll('.task');
    const colums = document.querySelectorAll('.kanban__column');


    draggables.forEach(function (item) {
        item.addEventListener('dragstart', function () {
            item.classList.add('dragging');
        })

        item.addEventListener('dragend', function () {
            item.classList.remove('dragging');
        })
        item.getAttribute('draggable');
        item.setAttribute('draggable', 'true');
    })


    colums.forEach(function (item) {
        item.addEventListener('dragover', function (event) {
            event.preventDefault();
            const draggable = document.querySelector('.dragging');
            item.querySelector('.kanban__list').appendChild(draggable);
        })
    })
})


