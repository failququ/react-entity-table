import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { TTableRow } from '../components/types';

class EntityManageForm {
    tableData: TTableRow[] = [];

    isFormValid: Boolean = true;
    isColorValid: Boolean = false;
    isModelValid: Boolean = false;
    isPriceValid: Boolean = false;
    isDiagonalValid: Boolean = false;
    isDateValid: Boolean = false;


    entityID: React.Key | undefined = -1;
    entityDate = '';
    entityImage : any = '' 
    entityModel = '';
    entityPrice = 0;
    entityColor = '';
    entityDiagonal = 0;

    constructor() {
        makeAutoObservable(this);
    }

    validateModel() {
        if(entityManageFormStore.entityModel.length < 3 || entityManageFormStore.entityModel.length > 20) {
                entityManageFormStore.isModelValid = false;
        } else {
            entityManageFormStore.isModelValid = true;
        }
    }

    validatePrice() {
        if(entityManageFormStore.entityPrice === 0 || entityManageFormStore.entityPrice < 10000 || entityManageFormStore.entityPrice > 100000) {
            entityManageFormStore.isPriceValid = false;
        } else {
        entityManageFormStore.isPriceValid = true;
        }
    }

    validateColor() {
        if(entityManageFormStore.entityColor === "Выберите цвет") {
            entityManageFormStore.isColorValid = false;
        } else {
        entityManageFormStore.isColorValid = true;
        }
    }

    validateDate() {
        if(entityManageFormStore.entityDate === "") {
            entityManageFormStore.isDateValid = false;
        } else {
        entityManageFormStore.isDateValid = true;
        }
    }

    validateDiagonal() {
        if(entityManageFormStore.entityDiagonal === 0 || entityManageFormStore.entityDiagonal < 0) {
            entityManageFormStore.isDiagonalValid = false;
        } else {
        entityManageFormStore.isDiagonalValid = true;
        }
    }

    onEntityModelChange(newModel: string) {
        entityManageFormStore.entityModel = newModel;
    }

    onEntityPriceChange(newPrice: number) {
        entityManageFormStore.entityPrice = newPrice;
    }

    onEntityColorSelect(newColor: string) {
        entityManageFormStore.entityColor = newColor;
    }

    onEntityDiagonalSelect(newDiagonal: number) {
        entityManageFormStore.entityDiagonal = newDiagonal;
    }

    onEntityDateSelect(newDate: string) {
        entityManageFormStore.entityDate = newDate;
    }

    onEntityFileSave(fileName : any) {
        entityManageFormStore.entityImage = fileName;
    }

    fetchData() {
        axios.get('http://localhost:3002/entities/')
        .then(res => entityManageFormStore.tableData = res.data)
    }

    checkEntity(id: React.Key | undefined) {

        entityManageFormStore.tableData.map((entity) => {
            if (entity.id === id) {
                entityManageFormStore.entityID = entity.id;
                entityManageFormStore.entityModel = entity.model;
                entityManageFormStore.entityPrice = entity.price;
                entityManageFormStore.entityColor = entity.color;
                entityManageFormStore.entityDiagonal = entity.diagonal;
                entityManageFormStore.entityDate = entity.date;
                entityManageFormStore.entityImage = entity.photo;
            }
        });
    }

    async addEntityToTable(event: any) {
        event.preventDefault();

        const stateObj: TTableRow = {
            model: entityManageFormStore.entityModel,
            price: entityManageFormStore.entityPrice,
            color: entityManageFormStore.entityColor,
            diagonal: entityManageFormStore.entityDiagonal,
            date: entityManageFormStore.entityDate,
            photo: entityManageFormStore.entityImage,
        };


        if (entityManageFormStore.entityID === -1) {
            await axios.post('http://localhost:3002/entities/', stateObj)
                .catch((error) => console.log(error));
            entityManageFormStore.fetchData();
                
                
        } else {
            await axios.put(`http://localhost:3002/entities/${entityManageFormStore.entityID}`, stateObj);
            entityManageFormStore.fetchData();
        }

        entityManageFormStore.resetInputData(event);
    }

    async deleteEntity(id: React.Key | undefined) {

        entityManageFormStore.checkEntity(id);

        await axios.delete(`http://localhost:3002/entities/${entityManageFormStore.entityID}`);
        axios.get('http://localhost:3002/entities')
        .then(res => entityManageFormStore.tableData = res.data)
        
        entityManageFormStore.resetState();
    }

    resetInputData(event: any) {
        event.preventDefault();
        entityManageFormStore.resetState();
    }

    resetState() {
        entityManageFormStore.entityID = -1;
        entityManageFormStore.entityDate = '';
        entityManageFormStore.entityImage  = new File([""], "filename"); ;
        entityManageFormStore.entityModel = '';
        entityManageFormStore.entityPrice = 0;
        entityManageFormStore.entityColor = '';
        entityManageFormStore.entityDiagonal = 0;
    }

    changeTableData(id: React.Key | undefined) {

        entityManageFormStore.checkEntity(id);

    }
}

const entityManageFormStore = new EntityManageForm();

export default entityManageFormStore;
