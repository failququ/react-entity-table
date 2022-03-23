import { observer } from 'mobx-react-lite';
import React from 'react';
import entityManageFormStore from '../store/entityManageForm';
import { ManagingForm, ManagingFormBlock, ManagingFormButton, ManagingFormButtonsBlock, 
        ManagingFormFileInput, ManagingFormInput, ManagingFormSelect } from './style';



const EntityManageForm = observer(() => {


    function readFile(input: any) {
        let file = input.files[0];

        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function() {
            entityManageFormStore.entityImage=reader.result
        };

        reader.onerror = function() {
            console.log(reader.error);
        };
}
    
    return (
        <ManagingFormBlock >
            <ManagingForm>

                {!entityManageFormStore.isModelValid && <div style={{color: 'red'}}>Длина должна быть от 3 до 20 символов</div>}
                <ManagingFormInput type="text" placeholder='Введите модель' onBlur={entityManageFormStore.validateModel}
                    value={entityManageFormStore.entityModel} 
                    onChange={(e) => {entityManageFormStore.onEntityModelChange(e.target.value)}} />
                
                {!entityManageFormStore.isPriceValid && <div style={{color: 'red'}}>Введите корректную цену (не менее 10000 и не более 100000)</div>}
                <ManagingFormInput onBlur={entityManageFormStore.validatePrice} type="text" placeholder='Введите цену' 
                value={entityManageFormStore.entityPrice}  
                onChange={(e) => {entityManageFormStore.onEntityPriceChange(Number(e.target.value))}}/>

                {!entityManageFormStore.isColorValid && <div style={{color: 'red'}}>Выберите цвет</div>}
                <ManagingFormSelect 
                onBlur={entityManageFormStore.validateColor}
                onChange={(e) => {entityManageFormStore.onEntityColorSelect(e.target.value)}} 
                value={entityManageFormStore.entityColor} 
                name="color">
                    <option value="Выберите цвет">Выберите цвет</option>
                    <option value="Черный">Черный</option>
                    <option value="Серый">Серый</option>
                    <option value="Белый">Белый</option>
                </ManagingFormSelect>

                {!entityManageFormStore.isDiagonalValid && <div style={{color: 'red'}}>Выберите диагональ</div>}
                <ManagingFormSelect 
                onBlur={entityManageFormStore.validateDiagonal}
                onChange={(e) => {entityManageFormStore.onEntityDiagonalSelect(Number(e.target.value))}} 
                value={entityManageFormStore.entityDiagonal} 
                name="">
                    <option value="0">Выберите диагональ, "</option>
                    <option value="24">24</option>
                    <option value="28">28</option>
                    <option value="39">39</option>
                    <option value="49">49</option>
                    <option value="55">55</option>
                    <option value="65">65</option>
                </ManagingFormSelect>

                {!entityManageFormStore.isDateValid && <div style={{color: 'red'}}>Выберите дату</div>}
                <ManagingFormInput 
                onBlur={entityManageFormStore.validateDate}
                onChange={(e) => {entityManageFormStore.onEntityDateSelect(e.target.value)}} 
                value={entityManageFormStore.entityDate} 
                type="date" />
                <ManagingFormFileInput required onChange={(e) => {readFile(e.target)}} type="file" accept="image/*" />
                <ManagingFormButtonsBlock>
                    <ManagingFormButton onClick={entityManageFormStore.addEntityToTable}>Сохранить изменения</ManagingFormButton>
                    <ManagingFormButton onClick ={entityManageFormStore.resetInputData}>Отменить изменения</ManagingFormButton>
                </ManagingFormButtonsBlock>
            </ManagingForm>
        </ManagingFormBlock>
    );
});

export default EntityManageForm;