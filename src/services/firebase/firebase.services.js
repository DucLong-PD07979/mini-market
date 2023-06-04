import {
    query,
    collection,
    getDocs,
    limit,
    where,
    getDoc,
    doc,
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
        getProductsFlashDeal: async function (setData) {
            const querySnapshot = await getDocs(this.queryHelper('products', limit(8)));
            const dataRes = [];

            querySnapshot.forEach((doc) => {
                dataRes.push({ id: doc.id, ...doc.data() });
            });

            return setData(dataRes);
        },
        getCarsProduct: async function (setData) {
            const querySnapshot = await getDocs(
                this.queryHelper(
                    'products',
                    where('categories.name', '==', 'car'),
                    limit(6),
                ),
            );

            const dataRes = [];

            querySnapshot.forEach((doc) => {
                dataRes.push({ id: doc.id, ...doc.data() });
            });

            return setData(dataRes);
        },
        getMobiPhonesProduct: async function (setData) {
            const querySnapshot = await getDocs(
                this.queryHelper(
                    'products',
                    where('categories.name', '==', 'mobile phone'),
                    limit(6),
                ),
            );

            const dataRes = [];

            querySnapshot.forEach((doc) => {
                dataRes.push({ id: doc.id, ...doc.data() });
            });

            return setData(dataRes);
        },
        getMoreForYou: async function (setData) {
            const querySnapshot = await getDocs(this.queryHelper('products', limit(8)));

            const dataRes = [];

            querySnapshot.forEach((doc) => {
                dataRes.push({ id: doc.id, ...doc.data() });
            });

            return setData(dataRes);
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

                const dataRes = [];

                querySnapshot.forEach((doc) => {
                    dataRes.push({ id: doc.id, ...doc.data() });
                });

                return setData(dataRes);
            };
        },
        getCategories: async function (setData) {
            const querySnapshot = await getDocs(this.queryHelper('categories', limit(6)));

            const dataRes = [];

            querySnapshot.forEach((doc) => {
                dataRes.push({ id: doc.id, ...doc.data() });
            });

            return setData(dataRes);
        },
        getSearchProducts: function (categoriesType,searchValue) {
            return async function (setData) {
                const querySnapshot = await getDocs(
                    this.queryHelper(
                        'products',
                        limit(6),
                        where('categories.name', '==', categoriesType),
                        where('title', '>=', searchValue),
                    ),
                );

                const dataRes = [];

                querySnapshot.forEach((doc) => {
                    dataRes.push({ id: doc.id, ...doc.data() });
                });

                return setData(dataRes);
            };
        },
    },
};

export default firebaseServices;
