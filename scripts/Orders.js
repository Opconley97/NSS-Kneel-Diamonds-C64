export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders")
    const orders = await fetchResponse.json()


    let ordersHTML = "<h2>Custom Jewelry Orders</h2>"

    

    const divStringArray = orders.map(
        (order) => {
            return `<div>
            Order #${order.id}
            </div>`
        }
    )


    ordersHTML += divStringArray.join("")
    return ordersHTML
}