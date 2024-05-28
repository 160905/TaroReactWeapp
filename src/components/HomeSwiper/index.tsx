import { useState, useEffect } from 'react'
import { View, Swiper, SwiperItem, Image, Navigator, Text } from '@tarojs/components'

export const HomeSwiper = () => {
    const [items, setItems] = useState<{ url: string, imageSrc: string }[]>([])
    const [data, setData] = useState<{ title: string, copyright: string, url: string }>()

    useEffect(() => {
    }, [])

    return (
        <Swiper
            className='test-h'
            // indicatorColor='#999'
            // indicatorActiveColor='#333'
            vertical={false}
            circular
            indicatorDots
            autoplay
        >
            {
                items.map((item, index) => (
                    <SwiperItem key={index}>
                        <Navigator url={`${item.url}?index=${index}`}>
                            <Image src={item.imageSrc} mode="scaleToFill"></Image>
                        </Navigator>
                    </SwiperItem>
                ))
            }
        </Swiper>
    )
}