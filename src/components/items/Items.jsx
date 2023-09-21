import React, {useEffect, useState} from 'react';
import Title from "../reusable/Title/Title";
import Body from "../reusable/body/Body";
import s from './Items.module.scss'
import Input from "../reusable/inputs/Input";
import Button from "../reusable/button/Button";

const Items = () => {
    const [items,setItems] = useState([{
        id:1,
        text: 'test'
    }])
    useEffect(() => {
        localStorage.getItem('items') ? setItems(JSON.parse(localStorage.getItem('items'))): setItems(items);
    }, []);
    const [text,setText] = useState('')
    const [isValidItem,setIsValidItem] = useState(false)

    const onHandleChangeText = (item) => {
        setText(item)
        setIsValidItem(false)
    }

    const AddItem = () => {
        if (text !== '') {
            setItems ([{
                id: items.length + 1,
                text: text
            },...items])
            localStorage.setItem('items', JSON.stringify(items));
            console.log(items)
            setText('')
        } else {
            setIsValidItem(true)
        }
    }

    const deleteItems = (id) => {
        let newItems = [...items].filter(item => item.id !== id)
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems))
    }

    const listItems = items.map((item)=>{
       return <div className={s.items} key={item.id}>
                {item.text}
                <span className={s.item_number}>{item.id}</span>
                <Button className={s.remove_btn} onClick={() => deleteItems(item.id)}>Remove</Button>
        </div>
        }
    )

    return (
        <Body>
            <Title>
                Items
            </Title>
            <div className={s.add_container}>
                <div>
                <Input
                    type='text'
                    value={text}
                    setValue={e => onHandleChangeText(e.target.value)}
                    placeholder='Type name here...'
                />
                    <span className={isValidItem ? s.visible : s.hide }>Enter item</span>
                </div>
                <Button className={s.item_btn} onClick={AddItem}>Add New</Button>
            </div>
            <div>
                {listItems}
            </div>

        </Body>
    );
};

export default Items;