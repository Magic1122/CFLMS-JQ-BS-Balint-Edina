console.log('JS is running...')

/* Basic 2 | TODO List
Fluid and responsive user experience is expected from every single user these days. This is the part where jQuery animations can help us.

Create jQuery TODO program, which will list 5 TODO tasks vertically and while clicking on some task it will disappear slowly as well as slide to the right while disappearing.

BONUS: Give the user even more functionality by providing an input field where the user can create new TODO tasks (recommended way of showing a new task in the list is by using some animation effect of your choice)


 */

$(document).ready(() => {

    $('#form').on('submit', (e) => {
        e.preventDefault()
        const todo = $('#input').val()
        const index = $('ul')[0].children.length
        console.log($('ul'))
        console.log('index', index)
        const todoEl = `<li id='${index}'>${todo}</li>`
        $('ul').append(todoEl)
        $(`#${index}`).hide()
        $(`#${index}`).fadeIn(1500)
        // $('ul').children().last()[0].hide()
        // console.log('LAST', $('ul').children().last()[0])
        // todoEl.fadeIn(1500)

        addEventListeners()
        $('#input').val('')

    })

    const addEventListeners = () => {
        
            $('li').on('click', function () {
                $(this).animate({
                    opacity: 0.0,
                    paddingLeft: '+=80'
                }, 500, function () {
                    $(this).remove();
                })
            })
    }

    addEventListeners()

})

