var blogs = document.querySelectorAll(".blog");

blogs.forEach(function(blog){
    const bth = blog.querySelector('.blog-btn')
    btn.addEventListener('click', function(){
        blog.classList.toggle('show-text')
    })
});