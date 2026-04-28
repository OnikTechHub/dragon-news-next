import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark } from 'react-icons/ci';
import { FaEye, FaRegShareSquare, FaStar } from 'react-icons/fa';

const NewsDetailsPage = async ({ params }) => {
    const {id} = await params;
    console.log(id, "params")
    const news = await getNewsDetailsById(id);
    console.log(news, "news")
    return (
        <div className='max-w-4xl  mx-auto my-8 '>
           <div className="card-body">
                {/* Author info */}
                <div className='flex justify-between items-center bg-slate-200 p-4'>
                    <div className='flex gap-2 items-center'>
                        <Image src={news.author?.img} height={40}
                            width={40} className='rounded-full' />

                        <div >
                            <h2 className='font-semibold'>{news.author?.name} </h2>
                            <p className='text-xs'>{news.author?.published_date}</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <FaRegShareSquare className='text-xl' />
                        <CiBookmark className='text-xl' />
                    </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
                

                <figure>
                    <Image
                        src={news.image_url}
                        alt={news.title}
                        width={300}
                        height={300}
                        className='w-full' />
                </figure>

                <p className=''>{news.details}</p>

                <div className='flex justify-between items-center gap-4' >
                    <div className='flex items-center gap-4'>
                        <h2 className='flex items-center gap-2'><FaStar className='text-lg text-yellow-500'/>{news.rating.number} </h2>
                        <h2 className='flex items-center gap-2'><FaEye className='text-lg '/>{news.total_view}</h2>
                    </div>
                    <Link href={`/category/${news.category_id}`}>
                    <button className='btn bg-purple-500 text-white'>See other news <BsArrowRight></BsArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;