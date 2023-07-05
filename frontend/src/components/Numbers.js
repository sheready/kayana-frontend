import React from 'react'

const Numbers = () => {
  return (
    <div class="mt-4 container flex-col mx-auto md:flex-row">
        <h3 class="text-gray text-2xl font-bold mt-4 align-middle lg:mt-10">OUR STATS</h3>
        <div class="p-4">
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 sm:p-2">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-body text-green font-bold">7000+</dt>
                    <dd class="text-gray font-primary font-bold text-lg">Participants</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-body text-green font-bold">100+</dt>
                    <dd class="text-gray font-bold font-primary text-lg">Masterclasses held</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-body text-green font-bold">20000+</dt>
                    <dd class="text-gray font-bold font-primary text-lg">Women </dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-body text-green font-bold">1B+</dt>
                    <dd class="text-gray font-bold font-primary text-lg">Funding</dd>
                </div>
            </dl>
        </div>
    </div>
  )
}

export default Numbers