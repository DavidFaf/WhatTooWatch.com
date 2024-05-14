import React from 'react'

const test = () => {
  return (
    <div>
                <div className="card card-compact md:card-mormal w-full md:w-[40rem] bg-base-100 shadow-xl mx-auto">
          <figure>
            <div class="video-responsive w-full">
              <iframe
                src="https://www.youtube.com/embed/_tOW_LCB23I?modestbranding=1&playsinline=1&rel=0&enablejsapi=1&autohide=1&showinfo=0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                title="Embedded youtube"
                class="w-full h-64 md:h-96"
              ></iframe>
            </div>
          </figure>
          <div className="card-body">
            <h2
              class="card-title tracking-tight cursor-pointer whitespace-nowrap overflow-auto noScroolBar nunito"
              data-tip="Click to copy title"
              currentitem="false"
            >
              Tina
            </h2>
          </div>
          <div class="text-lg">
            2021 · 1h 58min · ⭐ <span class="font-semibold">8.1</span>
            <span class="opacity-75">/10</span>
          </div>
          <div class="flex flex-row justify-start items-center gap-2 wrap flex-nowrap overflow-auto pb-2 noScroolBar">
            <div class="badge badge-primary badge-outline whitespace-nowrap nunito">
              Biography
            </div>
            <div class="badge badge-primary badge-outline whitespace-nowrap nunito">
              Music
            </div>
            <div class="badge badge-primary badge-outline whitespace-nowrap nunito">
              Documentary
            </div>
          </div>
        </div>
    </div>
  )
}

export default test