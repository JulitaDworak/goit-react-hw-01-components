export const Statistics = ({
    title = 'Statisctics',
    stats

}) => {
    return(
<>
<section class="statistics">
<h2 class="title">Upload stats</h2>
<ul class="stat-list">

{stats.map(data => (
<li class="item" key={data.id}>
<span class="label">{data.label}</span>
<span class="percentage">{data.percentage}</span>
</li>
))}
</ul>
</section>
</>
    )
}

