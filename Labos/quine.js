//OPCION 1:
console.log("quine opcion 1:")
!function quine() {
    console.log('!' + String(quine) + '()');
}()

//OPCION 2:
console.log("quine opcion 2:")
!function quine() { console.log(quine.toString()) }()