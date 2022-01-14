const appleList = [
    {
        "type": "iPad Air",
        "setpic": "/JavaScript_HW/apple.pic/ipad-air-mainpic-0.jfif",
        "colors": [
            {
                "colorname": "太空灰色",
                "colorsrc": "/JavaScript_HW/apple.pic/color-gray.png",
                "mainsrc": "/JavaScript_HW/apple.pic/ipad-air-mainpic-1.png"
            },
            {
                "colorname": "銀色",
                "colorsrc": "/JavaScript_HW/apple.pic/color-silver.png",
                "mainsrc": "/JavaScript_HW/apple.pic/ipad-air-mainpic-2.png"
            },
            {
                "colorname": "綠色",
                "colorsrc": "/JavaScript_HW/apple.pic/color-green.jfif",
                "mainsrc": "/JavaScript_HW/apple.pic/ipad-air-mainpic-3.png"
            },
            {
                "colorname": "玫瑰金色",
                "colorsrc": "/JavaScript_HW/apple.pic/color-pink.jfif",
                "mainsrc": "/JavaScript_HW/apple.pic/ipad-air-mainpic-4.png"
            },
            {
                "colorname": "天藍色",
                "colorsrc": "/JavaScript_HW/apple.pic/color-blue.png",
                "mainsrc": "/JavaScript_HW/apple.pic/ipad-air-mainpic-5.png"
            }
        ],
        "gbs": {
            "64GB": 18900,
            "256GB": 23900
        },
        "wifi": {
            "titles": [
                "Wi-Fi",
                "Wi-Fi + 行動網路"
            ],
            "normal": 0,
            "wifiplus": 4300
        }
    },
    {
        "type": "iPad",
        "setpic": "/JavaScript_HW/apple.pic/ipad-mainpic-1.png",
        "colors": [
            {
                "colorname": "太空灰色",
                "colorsrc": "/JavaScript_HW/apple.pic/color-gray.png",
                "mainsrc": "/JavaScript_HW/apple.pic/ipad-mainpic-1.png"
            },
            {
                "colorname": "銀色",
                "colorsrc": "/JavaScript_HW/apple.pic/color-silver.png",
                "mainsrc": "/JavaScript_HW/apple.pic/ipad-mainpic-2.png"
            }
        ],
        "gbs": {
            "64GB": 10500,
            "256GB": 15000
        },
        "wifi": {
            "titles":["Wi-Fi","Wi-Fi + 行動網路"],
            "normal": 0,
            "wifiplus": 4000
        }
    },
    {
        "type": "iPad-mini",
        "setpic": "/JavaScript_HW/apple.pic/ipad-mini-mainpic-0.jfif",
        "colors": [
            {
                "colorname": "太空灰色",
                "colorsrc": "/JavaScript_HW/apple.pic/color-gray.png",
                "mainsrc": "/JavaScript_HW/apple.pic/ipad-mini-mainpic-1.png"
            },
            {
                "colorname": "粉紅色",
                "colorsrc": "/JavaScript_HW/apple.pic/color-pink.jfif",
                "mainsrc": "/JavaScript_HW/apple.pic/ipad-mini-mainpic-2.png"
            },
            {
                "colorname": "紫色",
                "colorsrc": "/JavaScript_HW/apple.pic/color-purple.png",
                "mainsrc": "/JavaScript_HW/apple.pic/ipad-mini-mainpic-3.png"
            },
            {
                "colorname": "星光色",
                "colorsrc": "/JavaScript_HW/apple.pic/color-star.png",
                "mainsrc": "/JavaScript_HW/apple.pic/ipad-mini-mainpic-4.png"
            }
        ],
        "gbs": {
            "64GB": 14900,
            "256GB": 19400
        },
        "wifi": {
            "titles": [
                "Wi-Fi",
                "Wi-Fi + 行動網路"
            ],
            "normal": 0,
            "wifiplus": 4500
            
        }
    }
]
const price = document.getElementById('price')

const mainpicItem = document.getElementById('mainpicItem')
const outwardRow = document.getElementById('outwardRow')
const storageRow = document.getElementById('storageRow')
const wifiRow = document.getElementById('wifiRow')
const btn_ipad_air = document.getElementById('btn_ipad_air')
const btn_ipad = document.getElementById('btn_ipad')
const btn_ipad_mini = document.getElementById('btn_ipad_mini')
const buywhatCol = document.getElementById('buywhatCol')
window.onload = function () {
    setPage(0)
    btn_ipad_air.addEventListener('click', () => { setPage(0) })
    btn_ipad.addEventListener('click', () => { setPage(1) })
    btn_ipad_mini.addEventListener('click', () => { setPage(2)})
}

function setPage(typenum) {
    //一開始的圖
    buywhatCol.innerHTML = ""
    mainpicItem.innerHTML= ""
    outwardRow.innerHTML= ""
    storageRow.innerHTML =""
    wifiRow.innerHTML = ""
    let mainimg = document.createElement('img')
    mainimg.setAttribute('class', "w-100")
    mainimg.setAttribute('src', appleList[typenum].setpic)
    mainpicItem.append(mainimg)
    //title
    let h2 = document.createElement('h2')
    h2.innerHTML = `購買 ${appleList[typenum].type}`
    buywhatCol.appendChild(h2)

    //外觀標題
        const col12_outward = document.createElement('div')
        col12_outward.setAttribute('class', 'col-12')
        const h2_outward = document.createElement('h2')
        h2_outward.innerHTML = '外觀'
        col12_outward.appendChild(h2_outward)
        outwardRow.appendChild(col12_outward)
    //外觀按鈕
    appleList[typenum].colors.forEach((color, index) => {

        
        
        let col6 = document.createElement('div')
        col6.setAttribute('class', 'col-6')
        let button = document.createElement('button')
        button.setAttribute('class', 'p-btn')
        button.setAttribute('id', `color_btn_${index}`)
        
        let img = document.createElement('img')
        img.setAttribute('src',color.colorsrc)
        
        let span = document.createElement('span')
        span.innerHTML = color.colorname
        
        button.appendChild(img)
        button.appendChild(span)
        col6.appendChild(button)
        
        outwardRow.appendChild(col6)
    })

    //儲存裝置標題
        const col12_storage = document.createElement('div')
        col12_storage.setAttribute('class', 'col-12')
        const h2_storage = document.createElement('h2')
        h2_storage.innerHTML = '儲存裝置'
        col12_storage.appendChild(h2_storage)
        storageRow.appendChild(col12_storage)
    //儲存裝置按鈕

    Object.keys(appleList[typenum].gbs).forEach((gb, index) => {
        let col6 = document.createElement('div')
        col6.setAttribute('class', 'col-6')
        let button = document.createElement('button')
        button.setAttribute('class', 'p-btn')
        button.setAttribute('id',`gb_btn_${index}`)
        button.innerHTML = gb
        col6.appendChild(button)
        storageRow.appendChild(col6)
    })
    //連線能力標題
        const col12_wifi = document.createElement('div')
        col12_wifi.setAttribute('class', 'col-12')
        const h2_wifi = document.createElement('h2')
        h2_wifi.innerHTML = '連線能力'
        col12_wifi.appendChild(h2_wifi)
        wifiRow.appendChild(col12_wifi)
    //連線能力按鈕
    appleList[typenum].wifi.titles.forEach((wifioption, index) => {
        let col6 = document.createElement('div')
        col6.setAttribute('class', 'col-6')
        let button = document.createElement('button')
        button.setAttribute('class', 'p-btn')
        button.setAttribute('id',`wifi_btn_${index}`)
        button.innerHTML = wifioption
        col6.appendChild(button)
        
        wifiRow.appendChild(col6)
    })
    //onclick
    //color_btn_${index} outwardRow
    //下次寫for不加let就自殺
    for (let i = 0 ; i <= outwardRow.childElementCount - 2; i++)
    {
        document.getElementById(`color_btn_${i}`).addEventListener('click', () => { color_btn_click(i) });
    }


    function color_btn_click(i) {
        mainimg.setAttribute('src', appleList[typenum].colors[i].mainsrc)
    }
}