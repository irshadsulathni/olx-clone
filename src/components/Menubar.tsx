import arrow from '../assets/arrow.png'

function Menubar() {
  return (
    <div className="flex border shadow-md ml-[150px] p-4 mr-[150px] w-35">
        <div className='flex ml-[150px] '>
            <h2 className='text-sm font-bold' >ALL CATEGORIES</h2>
            <img src={arrow} className="w-6 h-6 cursor-pointer ml-2"/>
        </div>
        <h1 className='ml-5 hover:text-teal-400 cursor-pointer text-sm' >Cars</h1>
        <h1 className='ml-5 hover:text-teal-400 cursor-pointer text-sm'>Motorcycles</h1>
        <h1 className='ml-5 hover:text-teal-400 cursor-pointer text-sm'>Mobile Phones</h1>
        <h1 className='ml-5 hover:text-teal-400 cursor-pointer text-sm'>For Sale: Houses & Apartments</h1>
        <h1 className='ml-5 hover:text-teal-400 cursor-pointer text-sm'>Scooter</h1>
        <h1 className='ml-5 hover:text-teal-400 cursor-pointer text-sm'>Commercial & Other Vehicles</h1>
        <h1 className='ml-5 hover:text-teal-400 cursor-pointer text-sm'>For Rent: Houses & Apartments</h1>
    </div>
  )
}

export default Menubar