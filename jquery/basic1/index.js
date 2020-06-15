console.log('JS is running...')

/* Basic 1 | Animation
Download the ZIP file attached to this exercise and extract it. Use animation_exercise.html to create the following effect on the "blue box": 

After refreshing the page it appears slowly, stays in the same state for five seconds and than slowly disappears.

 */
$(document).ready(() => {
    const animate = $('#animate')
    animate.hide()
    animate.fadeIn(3000)

    setTimeout(() => {
        animate.fadeOut(3000)
    }, 5000)
})
