import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Header from './Header';
import LoadingSpinner from './LoadingSpinner';

const initialCardState = [
    {
        id: "1",
        tag: "wedding",
        image: "wed-1.jpg"
    },
    {
        id: "2",
        tag: "wedding",
        image: "wed-2.jpg"
    },
    {
        id: "3",
        tag: "wedding",
        image: "wed-3.jpg"
    },
    {
        id: "4",
        tag: "wedding",
        image: "wed-4.jpg"
    },
    {
        id: "5",
        tag: "wedding",
        image: "wed-5.jpg"
    },
    {
        id: "6",
        tag: "random",
        image: "rand-1.jpg"
    },
    {
        id: "7",
        tag: "random",
        image: "rand-2.jpg"
    },
    {
        id: "8",
        tag: "random",
        image: "rand-3.jpg"
    },
    {
        id: "9",
        tag: "random",
        image: "rand-4.jpg"
    },
    {
        id: "10",
        tag: "random",
        image: "rand-5.jpg"
    },
    {
        id: "11",
        tag: "Birthday",
        image: "birth-1.jpg"
    },
    {
        id: "12",
        tag: "Birthday",
        image: "birth-2.jpg"
    },
    {
        id: "13",
        tag: "Birthday",
        image: "birth-3.jpg"
    },
    {
        id: "14",
        tag: "Birthday",
        image: "birth-4.jpg"
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
        <div className='image-card'>
            <div
                ref={setNodeRef}
                style={style}
                {...attributes}
                {...listeners}
                className="image-card-content">
                <div className=''>
                    <img
                        className='w-[200px] h-[150px] md:h-[230px] rounded transform hover:scale-110 transition-transform hover:shadow-2xl duration-300'
                        src={cardItem.image}
                        alt={cardItem.tag} />
                    <p className='relative top-[-40px] left-2 bg-green-300 text-black text-sm bg-opacity-50 w-fit rounded-3xl px-4 py-1'>{cardItem.tag}</p>
                </div>
            </div>
        </div>
    );
}

function ImageCard() {
    const [items, setItems] = useState(initialCardState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

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
            <Header />
            <p className='text-3xl font-bold text-center mt-4'>Image Gallery</p>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div>
                    {/* Your content here */}
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={onDragEnd}>
                        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
                            <div className='w-fit p-4 grid grid-cols-2 md:grid-cols-4 m-auto gap-4'>
                                {items.map(cardItem => (
                                    <SortableCard key={cardItem.id} cardItem={cardItem} />
                                ))}
                            </div>
                        </SortableContext>
                    </DndContext>
                </div>
            )}
        </div>
    );
}

export default ImageCard;
