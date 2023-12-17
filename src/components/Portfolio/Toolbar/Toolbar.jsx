export const Toolbar = (options) => {
   return (
   <div className="toolbar">
      {options.filters.map(filter => (
         <button key={filter.id} className="button" onClick={() => options.filterItems(filter.name)}>
            {filter.name}
         </button>
      ))}
   </div>
   )
}