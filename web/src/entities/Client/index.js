// import { getClientFirstName } from "./model/selectors/getProfleData";
// import { getClientLastName } from "./model/selectors/getProfleData";
// import { getClientEmail } from "./model/selectors/getProfleData";
// import { getClientCity } from "./model/selectors/getProfleData";
// import { getClientStreet } from "./model/selectors/getProfleData";
// import { getClientBuilding } from "./model/selectors/getProfleData";
// import { getClientEntrance } from "./model/selectors/getProfleData";
// import { getClientFloor } from "./model/selectors/getProfleData";
// import { getClientAparts } from "./model/selectors/getProfleData";
// import { getClientPassword } from "./model/selectors/getProfleData";
// import { getClientType } from "./model/selectors/getProfleData";
import { getClientOrders } from "./model/selectors/getClientData";

import { clientActions } from "./model/slice/ClientSlice";
import { clientReducer } from "./model/slice/ClientSlice";
import { getClientData } from "./model/selectors/getClientData";

// export {
//     getClientFirstName,
//     getClientLastName,
//     getClientEmail,
//     getClientCity,
//     getClientStreet,
//     getClientBuilding,
//     getClientEntrance,
//     getClientFloor,
//     getClientAparts,
//     getClientPassword,
//     getClientType,
//     getClientOrders,
// };

export { clientReducer, clientActions, getClientData, getClientOrders };