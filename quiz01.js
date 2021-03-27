// 10진수로 받은 수를 2~9진수로 변경한 후, 각 자리수의 숫자를 곱해서 나온 값 중, 가장 큰 값을 가진 진수와 값을 출력
function func01(num) {
    let arr = [];
    for(let i = 2; i <= 9; i++) {
        let val = num.toString(i);

        arr.push(val.split("").reduce((a, v) => {
            return v != 0 ? a * v : a;
        }, 1));
            
    }

    let max = Math.max(...arr);
    console.log(max, arr.findIndex((v) => v === max) + 1);    
}

func01(1000);
func01(523);
