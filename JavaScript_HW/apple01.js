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
            "titles": ["Wi-Fi", "Wi-Fi + 行動網路"],
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
//全域宣告區
const price = document.getElementById('price')
const buyArea = document.getElementById('buyArea')
const mainpicItem = document.getElementById('mainpicItem')
const outwardRow = document.getElementById('outwardRow')
const storageRow = document.getElementById('storageRow')
const wifiRow = document.getElementById('wifiRow')
const btn_ipad_air = document.getElementById('btn_ipad_air')
const btn_ipad = document.getElementById('btn_ipad')
const btn_ipad_mini = document.getElementById('btn_ipad_mini')
const buywhatCol = document.getElementById('buywhatCol')
const btn_buy = document.getElementById('btn_buy')
const cartArea = document.getElementById('cartArea')
let wifi_price_normal
let wifi_price_plus

//執行區
window.onload = function () {
    setPage(0)
    btn_ipad_air.addEventListener('click', () => { setPage(0) })
    btn_ipad.addEventListener('click', () => { setPage(1) })
    btn_ipad_mini.addEventListener('click', () => { setPage(2) })
}

function setPage(typenum) {
    
    buywhatCol.innerHTML = ""
    mainpicItem.innerHTML = ""
    outwardRow.innerHTML = ""
    storageRow.innerHTML = ""
    wifiRow.innerHTML = ""
    //一開始的圖
    let mainimg = document.createElement('img')
    mainimg.setAttribute('class', "img-fluid ")
    mainimg.setAttribute('src', appleList[typenum].setpic)
    mainpicItem.append(mainimg)
    //title
    let h1 = document.createElement('h1')
    h1.innerHTML = `購買 ${appleList[typenum].type}`
    h1.setAttribute('class', 'fs-1 fw-bolder')
    buywhatCol.appendChild(h1)

    //外觀標題
    const col12_outward = document.createElement('button')
    col12_outward.setAttribute('class', 'col-12 col-md-12 border-0 text-start bg-white text-black')
    col12_outward.disabled = true
    const h2_outward = document.createElement('h2')
    h2_outward.setAttribute('id', 'h2_outward')
    h2_outward.innerHTML = '外觀'
    col12_outward.appendChild(h2_outward)
    outwardRow.appendChild(col12_outward)
    //外觀按鈕
    appleList[typenum].colors.forEach((color, index) => {

        let col6 = document.createElement('div')
        col6.setAttribute('class', 'col-12 col-md-6')
        let button = document.createElement('button')
        button.setAttribute('class', 'p-btn')
        button.setAttribute('id', `color_btn_${index}`)

        let img = document.createElement('img')
        img.setAttribute('src', color.colorsrc)

        let span = document.createElement('span')
        span.innerHTML = color.colorname

        button.appendChild(img)
        button.appendChild(span)

        col6.appendChild(button)

        outwardRow.appendChild(col6)
    })



    //儲存裝置標題
    const col12_storage = document.createElement('button')
    col12_storage.setAttribute('class', 'col-12 col-md-12 border-0 text-start bg-white text-black')
    col12_storage.disabled = true
    const h2_storage = document.createElement('h2')
    h2_storage.setAttribute('id', 'h2_storage')
    h2_storage.innerHTML = '儲存裝置'
    col12_storage.appendChild(h2_storage)
    storageRow.appendChild(col12_storage)
    //儲存裝置按鈕

    Object.keys(appleList[typenum].gbs).forEach((gb, index) => {
        let col6 = document.createElement('div')
        col6.setAttribute('class', 'col-12 col-md-6')
        let button = document.createElement('button')
        button.setAttribute('class', 'p-btn')
        button.setAttribute('id', `gb_btn_${index}`)
        button.disabled = true
        let storage_price = document.createElement('div')
        storage_price.innerHTML = appleList[typenum].gbs[gb]
        button.innerHTML = gb
        button.appendChild(storage_price)
        col6.appendChild(button)
        storageRow.appendChild(col6)
    })
    //連線能力標題
    const col12_wifi = document.createElement('button')
    col12_wifi.setAttribute('class', 'col-12 col-md-12 border-0 text-start bg-white text-black')
    col12_wifi.disabled = true
    const h2_wifi = document.createElement('h2')
    h2_wifi.setAttribute('id', 'h2_wifi')
    h2_wifi.innerHTML = '連線能力'
    col12_wifi.appendChild(h2_wifi)
    wifiRow.appendChild(col12_wifi)
    //連線能力按鈕
    appleList[typenum].wifi.titles.forEach((wifioption, index) => {
        let col6 = document.createElement('div')
        col6.setAttribute('class', 'col-12 col-md-6')
        let button = document.createElement('button')
        let wifi_price = document.createElement('div')
        button.setAttribute('class', 'p-btn')
        button.setAttribute('id', `wifi_btn_${index}`)
        button.innerHTML = wifioption
        button.appendChild(wifi_price)
        button.disabled = true
        col6.appendChild(button)

        wifiRow.appendChild(col6)
    })
    //price 
    price.innerHTML = `${Object.values(appleList[typenum].gbs)[0]}`
    //購買按鍵
    btn_buy.disabled = true


    // let cart = function () {
    //     let finalanswer = document.createElement('div')
    //     finalanswer.setAttribute('id', 'finalanswer')
    //     finalanswer.setAttribute('class', 'text-md-center')

    //     finalanswer.innerText = `您已經成功${h1.innerText}\n${h2_outward.innerText}\n${h2_storage.innerText}\n${h2_wifi.innerText}\n價格:NT$${price.innerText}元`
    //     document.body.appendChild(finalanswer)
    //     alert(`您已經成功${h1.innerText}\n${h2_outward.innerText}\n${h2_storage.innerText}\n${h2_wifi.innerText}\n價格:NT$${price.innerText}元`)
    //     btn_buy.removeEventListener('click', cart)

    // // }
    // btn_buy.addEventListener('click', cart)

    btn_buy.onclick = cart
    function cart() {
        let finalanswer = document.createElement('div')
        finalanswer.setAttribute('id', 'finalanswer')
        finalanswer.setAttribute('class', 'text-md-center ')

        finalanswer.innerText = `您已經成功${h1.innerText}\n${h2_outward.innerText}\n${h2_storage.innerText}\n${h2_wifi.innerText}\n價格:NT$${price.innerText}元`
        cartArea.appendChild(finalanswer)
        alert(`您已經成功${h1.innerText}\n${h2_outward.innerText}\n${h2_storage.innerText}\n${h2_wifi.innerText}\n價格:NT$${price.innerText}元`)
        btn_buy.removeEventListener('click',cart)
    }

//onclick外觀
//color_btn_${index} outwardRow
//下次寫for不加let就自殺
for (let i = 0; i <= outwardRow.childElementCount - 2; i++) {
    document.getElementById(`color_btn_${i}`).addEventListener('click', () => { color_btn_click(i) });
}

//要掛上改變主圖片的function
function color_btn_click(i) {
    mainimg.setAttribute('src', appleList[typenum].colors[i].mainsrc)
    //讓h2儲存選取到的顏色
    h2_outward.innerHTML = `外觀: ${appleList[typenum].colors[i].colorname}`
    //讓儲存裝置案紐disable = false
    let btn_storages = document.querySelectorAll('#storageRow .p-btn')
    btn_storages.forEach(btn_storage => {
        btn_storage.disabled = false
    })
    //讓colorbtn被選取到變色

    let btn_colors = document.querySelectorAll('#outwardRow .p-btn')
    btn_colors.forEach(btn_color => {
        btn_color.setAttribute('class', 'p-btn d-none')
        btn_color.setAttribute('selected', 'false')
    })
    document.getElementById(`color_btn_${i}`).setAttribute('class', 'p-btn  d-none')
    document.getElementById(`color_btn_${i}`).setAttribute('selected', 'true')
    col12_outward.disabled = false


}



//onclick儲存裝置 
//價格帶入#price 連線能力btn帶入價格
for (let i = 0; i <= storageRow.childElementCount - 2; i++) {
    let gb_btn = document.getElementById(`gb_btn_${i}`)

    gb_btn.addEventListener('click', () => { gb_btn_click(i) });
}

function gb_btn_click(i) {
    wifi_price_normal = document.querySelector(`#wifi_btn_${0} > div`)
    wifi_price_plus = document.querySelector(`#wifi_btn_${1} > div`)
    wifi_price_normal.innerHTML = Object.values(appleList[typenum].gbs)[i]
    wifi_price_plus.innerHTML = Object.values(appleList[typenum].gbs)[i] + appleList[typenum].wifi.wifiplus
    price.innerText = `${wifi_price_normal.innerHTML} `
    //選到的gb顯示在標題
    h2_storage.innerHTML = `儲存裝置: ${Object.keys(appleList[typenum].gbs)[i]}`
    //開啟下一階段按鍵
    let btn_wifis = document.querySelectorAll('#wifiRow .p-btn')
    btn_wifis.forEach(btn_wifi => {
        btn_wifi.disabled = false
    })
    //讓儲存裝置btn選取到變色
    let btn_storages = document.querySelectorAll('#storageRow .p-btn')
    btn_storages.forEach(btn_storage => {
        btn_storage.setAttribute('class', 'p-btn d-none')
        btn_storage.setAttribute('selected', 'false')
    })
    document.getElementById(`gb_btn_${i}`).setAttribute('class', 'p-btn  d-none')
    document.getElementById(`gb_btn_${i}`).setAttribute('selected', 'true')
    col12_storage.disabled = false
}



// 
//onclick連線能力
for (let i = 0; i <= wifiRow.childElementCount - 2; i++) {
    let wifi_btn = document.getElementById(`wifi_btn_${i}`)
    wifi_btn.addEventListener('click', () => { wifi_btn_click(i) });
}
function wifi_btn_click(i) {
    price.innerHTML = document.querySelector(`#wifi_btn_${i} > div`).innerHTML
    //標題加上已經選擇的方案
    h2_wifi.innerHTML = `連線能力: ${appleList[typenum].wifi.titles[i]}`
    //開啟購買鍵
    btn_buy.disabled = false
    //讓連線能力btn選取到變色
    let btn_wifis = document.querySelectorAll('#wifiRow .p-btn')
    btn_wifis.forEach(btn_wifi => {
        btn_wifi.setAttribute('class', 'p-btn d-none')
        btn_wifi.setAttribute('selected', 'false')
    })
    document.getElementById(`wifi_btn_${i}`).setAttribute('class', 'p-btn  d-none')
    document.getElementById(`wifi_btn_${i}`).setAttribute('selected', 'true')
    col12_wifi.disabled = false
}

let btn_colors = document.querySelectorAll('#outwardRow .p-btn')
col12_outward.addEventListener('click', function () {
    col12_outward.disabled = true
    btn_colors.forEach(btn_color => {
        btn_color.setAttribute('class', 'p-btn d-block')
    })
})
let btn_storages = document.querySelectorAll('#storageRow .p-btn ')
col12_storage.addEventListener('click', function () {
    col12_storage.disabled = true
    btn_storages.forEach(btn_storage => {
        btn_storage.setAttribute('class', 'p-btn d-block ')
    })
})
let btn_wifis = document.querySelectorAll('#wifiRow .p-btn')
col12_wifi.addEventListener('click', function () {
    col12_wifi.disabled = true
    btn_wifis.forEach(btn_wifi => {
        btn_wifi.setAttribute('class', 'p-btn  d-block ')
    })
})
    //btn 購物


}




