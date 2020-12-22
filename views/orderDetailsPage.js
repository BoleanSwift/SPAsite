import {parseElementFromString} from "../parser.js"

/**
 * @param {number} orderId
 * @return {Element}
 */
const view = (orderId) => parseElementFromString(`
    <div class="center-on-screen">
        <p>Thank you for the order ${orderId}.</p>
        <p>Our manager will contact you soon</p>
    </div>
`)

export default view
