"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepository = void 0;
exports.findAllDocuments = findAllDocuments;
exports.findOneDocument = findOneDocument;
exports.createNewDocument = createNewDocument;
exports.ResponseOfManyDocuments = ResponseOfManyDocuments;
exports.ResponseOfOneDocument = ResponseOfOneDocument;
const firebase_config_1 = __importDefault(require("../firebase/firebase.config"));
const firestore_1 = require("firebase/firestore");
const getRepository = (repository) => (0, firestore_1.collection)(firebase_config_1.default, repository);
exports.getRepository = getRepository;
function findAllDocuments(repository) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = (0, exports.getRepository)(repository);
        const querySnapshot = yield (0, firestore_1.getDocs)(collection);
        return ResponseOfManyDocuments(querySnapshot);
    });
}
function findOneDocument(repository, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = (0, exports.getRepository)(repository);
        const document = (0, firestore_1.doc)(collection, id);
        const querySnapshot = yield (0, firestore_1.getDoc)(document);
        return ResponseOfOneDocument(querySnapshot);
    });
}
function createNewDocument(repository, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = (0, exports.getRepository)(repository);
        const documentReference = yield (0, firestore_1.addDoc)(collection, Object.assign(Object.assign({}, data), { created_at: new Date(), updated_at: new Date(), deleted_at: null }));
        return documentReference;
    });
}
function ResponseOfManyDocuments(querySnapshot) {
    return querySnapshot.docs.map((doc) => {
        const { id } = doc;
        return Object.assign({ id }, doc.data());
    });
}
function ResponseOfOneDocument(doc) {
    return Object.assign({ id: doc.id }, doc.data());
}
