import React from 'react'

function DownloadApp() {
    return (
        <div className='download h-max p-12 max-sm:p-6' data-aos='fade-up' data-aos-duration='2000'>
            <div className='  h-full bg-amber-400 flex justify-center  gap-4 items-center  p-10 rounded-3xl max-lg:flex-col'>
                <div className='h-full content-center basis-2/5'>
                    <div className=' flex mt-4 gap-4 flex-col items-center'>
                        <div>
                            <h1 className=' text-3xl'>Download Organic App</h1>
                            <p>Online Orders made easy, fast and reliable</p>
                        </div>
                        <img className=' w-36' src={'/Images/img-app-store.webp'} alt=''/>
                        <img className=' w-36' src={'/Images/img-google-play.webp'} alt='' />
                    </div>

                </div>
                <div className='h-full content-center'>
                    <img className=' w-80 ' src={'/Images/banner-onlineapp.webp'} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp