import { OrdersActions, OrdersTypes } from "./orders.types"
import { CardProps } from "../../../Components/App/Components/Card/card.types"

export function changeOrderStatus(orders: CardProps[]): OrdersActions {
  return {
    type: OrdersTypes.CHANGE_ORDER_STATUS,
    payload: orders,
  }
}

export function setAddOrderFormVisible(show: boolean): OrdersActions {
  return {
    type: OrdersTypes.SET_ADD_ORDER_FORM_VISIBLE,
    payload: show,
  }
}

export function addOrder(data: CardProps[]): OrdersActions {
  return {
    type: OrdersTypes.SET_ADD_ORDER,
    payload: data,
  }
}
