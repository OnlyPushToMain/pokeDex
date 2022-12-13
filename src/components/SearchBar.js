import React from "react"

export default function SearchBar ({ changeQuery, setFilterParam, query }) {
  return (
    <div className="sticky top-0 bg-[white] shadow-md z-[2] text-sm p-[10px]">
      <form onSubmit={e => { e.preventDefault() }} className="flex flex-row items-center justify-evenly">
        <input onChange={event => changeQuery(event.target.value)} type="text" className="p-[10px] w-full border-2 border-solid border-[grey] p-[5px] m-[2px] rounded-[25px]" placeholder={query ? `${query}` : "Search"}>
        </input>
        <select onChange={event => setFilterParam(event.target.value) } className="ml-1 mr-1 p-[10px]">
          <option value="">Name
          </option>
          <option value="type">Type
          </option>
        </select>
      </form>
    </div>
  )
}
