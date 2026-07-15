import "../styles/SortDropdown.css";

export default function SortDropdown({sort,setSort,})
{

return(

<div className="sort-container">
<label>Sort By</label>

<select
value={sort}
onChange={(e)=>setSort(e.target.value)}
>
<option value="">Newest</option>

<option value="low">
Price : Low → High
</option>

<option value="high">
Price : High → Low
</option>

<option value="az">
Name : A → Z
</option>

<option value="za">
Name : Z → A
</option>
</select>
</div>
);

}