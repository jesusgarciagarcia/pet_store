export default function Inventory({inventory}){
    return (
        <section className="card-container" id="store-container">
            <span>
                <label>ordered</label>
                <input type="text" defaultValue={inventory.ordered}/>
            </span>
            <span>
                <label>approved</label>
                <input type="text" defaultValue={inventory.approved}/>
            </span>
            <span>
                <label>placed</label>
                <input type="text" defaultValue={inventory.placed}/>
            </span>
            <span>
                <label>shipped</label>
                <input type="text" defaultValue={inventory.shipped}/>
            </span>
            <span>
                <label>test</label>
                <input type="text" defaultValue={inventory.test}/>
            </span>
            <span>
                <label>pending</label>
                <input type="text" defaultValue={inventory.pending}/>
            </span>
            <span>
                <label>available</label>
                <input type="text" defaultValue={inventory.available}/>
            </span>
            <span>
                <label>deliver</label>
                <input type="text" defaultValue={inventory.deliver}/>
            </span>
            <span>
                <label>cancelled</label>
                <input type="text" defaultValue={inventory.cancelled}/>
            </span>
            <span>
                <label>delivered</label>
                <input type="text" defaultValue={inventory.delivered}/>
            </span>
        </section>
    )
}