import React from 'react'

function Card({name='Guest',post='Not defined' ,details={place:'Not defined',pincode:'Not defined'}}) {
    return (
        // <div>
        //     <h1>This is for test image</h1>
        //     <img src="https://images.pexels.com/photos/16610730/pexels-photo-16610730/free-photo-of-modern-skyscrapers-in-vancouver-british-columbia-canada.jpeg" alt="No image"></img>
        //     <h1 className='text-2xl'></h1>
        //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum molestias pariatur quae autem officia velit, aut dignissimos error tenetur. Recusandae pariatur corporis cum ipsum commodi exercitationem porro consequuntur harum illum?</p>
        // </div>
        <div>
            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/16610730/pexels-photo-16610730/free-photo-of-modern-skyscrapers-in-vancouver-british-columbia-canada.jpeg" alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p class="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                            {name} <br/> from {details.place} {details.pincode}
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            {post}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card