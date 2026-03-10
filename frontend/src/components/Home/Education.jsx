import React from 'react'
import { Link } from 'react-router-dom'
const Education = () => {
  const data = [
    {
      p:'Varasity the largest online stock market education in the world covering everything from the basic to advanced trading',
      link:'Versity',
      icon:'fa-solid fa-arrow-right'
    },
      {
      p:'TradingQ&A, the most active trading and investment community in india for all your market related queries.',
      link:'TradingQ&A',
      icon:'fa-solid fa-arrow-right'
    }
  ]

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="flex w-full">
        <div className="w-1/2">
          <img src="/education.svg" alt="" />
        </div>
        <div className="flex flex-col gap-8 w-1/2">
          <h1 className="text-4xl  font-semibold text-slate-900">
           Free and open market education
          </h1>
          <div className='flex flex-col gap-12 mt-5'>
          {data.map((item,idx) => (
            <div className='max-w-[80%] flex flex-col gap-6' key={idx}>
              <p className=''>{item.p}</p>
              <Link className='text-blue-600 flex items-center gap-2  hover:underline' to={'/'}>{item.link} <i className={item.icon}></i> </Link>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education