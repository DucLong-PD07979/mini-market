import {
    query,
    collection,
    getDocs,
    limit,
    where,
    getDoc,
    doc,
    orderBy,
    startAt,
} from 'firebase/firestore';
import { database } from '../../config/firebaseConfig';

const firebaseServices = {
    read_Data_To_Firebase: {
        queryHelper: function (nameDoc, ...props) {
            const q = query(collection(database, nameDoc), ...props);
            return q;
        },
        docRefHelper: function (nameDoc, ...props) {
            const docRef = doc(database, nameDoc, ...props);
            return docRef;
        },
        createLoopPushDataHelper: function (querySnapshot) {
            const dataRes = [];
            querySnapshot.forEach((doc) => {
                dataRes.push({ id: doc.id, ...doc.data() });
            });
            return dataRes;
        },
        getProductsFlashDeal: async function (setData) {
            const querySnapshot = await getDocs(this.queryHelper('products', limit(8)));
            const data = this.createLoopPushDataHelper(querySnapshot);
            return setData(data);
        },
        getCarsProduct: async function (setData) {
            const querySnapshot = await getDocs(
                this.queryHelper(
                    'products',
                    where('categories.name', '==', 'car'),
                    limit(6),
                ),
            );
            const data = this.createLoopPushDataHelper(querySnapshot);
            return setData(data);
        },
        getMobiPhonesProduct: async function (setData) {
            const querySnapshot = await getDocs(
                this.queryHelper(
                    'products',
                    where('categories.name', '==', 'mobile phone'),
                    limit(6),
                ),
            );
            const data = this.createLoopPushDataHelper(querySnapshot);
            return setData(data);
        },
        getMoreForYou: async function (setData) {
            const querySnapshot = await getDocs(this.queryHelper('products', limit(8)));
            const data = this.createLoopPushDataHelper(querySnapshot);
            return setData(data);
        },
        getSingleDetailsProduct: function (idProduct) {
            return async function (setData) {
                const docSnap = await getDoc(this.docRefHelper('products', idProduct));
                if (docSnap.exists()) {
                    return setData({ ...docSnap.data(), id: docSnap.id });
                } else {
                    console.log('No such document!');
                }
            };
        },
        getProducstRealted: function (categoriesType) {
            return async function (setData) {
                const querySnapshot = await getDocs(
                    this.queryHelper(
                        'products',
                        where('categories.name', '==', categoriesType),
                        limit(4),
                    ),
                );
                const data = this.createLoopPushDataHelper(querySnapshot);
                return setData(data);
            };
        },
        getCategories: async function (setData) {
            const querySnapshot = await getDocs(this.queryHelper('categories', limit(6)));
            const data = this.createLoopPushDataHelper(querySnapshot);
            return setData(data);
        },
        getSearchProducts: function (categoriesType, valueSearch) {
            return async function (setData) {
                const querySnapshot = await getDocs(
                    this.queryHelper(
                        'products',
                        limit(5),
                        orderBy('title'),
                        startAt(valueSearch),
                        where('categories.name', '==', categoriesType),
                    ),
                );
                const data = this.createLoopPushDataHelper(querySnapshot);
                return setData(data);
            };
        },
    },
};

export default firebaseServices;
