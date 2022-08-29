import React from "react"

export default function SearchBar ({ changeQuery, setFilterParam, query }) {
  return (
    <div className="sticky top-0 bg-[white] shadow-md z-[2]">
      <form onSubmit={e => { e.preventDefault() }} className="flex flex-row items-center justify-evenly">
        <input onChange={event => changeQuery(event.target.value)} type="text" className="w-full border-2 border-solid border-[grey] p-[5px] m-[2px] rounded-[25px]" placeholder="Search">
        </input>
        <select onChange={event => setFilterParam(event.target.value) } className="ml-1 mr-1">
          <option value="">None
          </option>
          <option value="type">Type
          </option>
        </select>
      </form>
    </div>
  )
}
