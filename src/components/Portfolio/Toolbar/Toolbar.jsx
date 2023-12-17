export const Toolbar = (options) => {
   return (
   <div className="toolbar">
      {options.filters.map(filter => (
         <button className="button" onClick={() => options.filterItems(filter)}>
            {filter}
         </button>
      ))}
   </div>
   )
}