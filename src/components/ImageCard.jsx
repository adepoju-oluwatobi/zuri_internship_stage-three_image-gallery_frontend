import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const initialCardState = [
    {
        id: "1",
        tag: "wedding",
        image: "/src/assets/wed-1.jpg"
    },
    {
        id: "2",
        tag: "wedding",
        image: "/src/assets/wed-2.jpg"
    },
    {
        id: "3",
        tag: "wedding",
        image: "/src/assets/wed-3.jpg"
    }
];

const SortableCard = ({ cardItem }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: cardItem.id });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="image-card">
            <img
                className='w-64'
                src={cardItem.image}
                alt={cardItem.tag} />
            <p>{cardItem.tag}</p>
        </div>
    )
}

function ImageCard() {
    const [items, setItems] = useState(initialCardState);

    const onDragEnd = (event) => {
        const { active, over } = event;
        if (active.id === over.id) {
            return;
        }
        setItems((cards) => {
            const oldIndex = cards.findIndex((cardItem) => cardItem.id === active.id);
            const newIndex = cards.findIndex((cardItem) => cardItem.id === over.id);
            return arrayMove(cards, oldIndex, newIndex)
        });
        console.log('Drag ended:', event);
    };

    return (
        <div>
            <p>Image Gallery</p>
            <div className="image-gallery flex flex-wrap gap-4">
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={onDragEnd}>
                    <SortableContext items={items} strategy={horizontalListSortingStrategy}>
                        {items.map(cardItem => (
                            <SortableCard key={cardItem.id} cardItem={cardItem} />
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    )
}

export default ImageCard;
