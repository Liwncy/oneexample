package casuallycode;


/**
 * 简化if-else
 *
 * @author: Liwncy
 * @date: 2020-11-23 10:54
 **/
public class CasuallyCae {
    public static void main(String[] args) {
        ifElseTestAa(1);
        ifElseTestAb(5);
//        String str = "";
//        if(n==1){
//            str = "one";
//        }else if(n==2){
//            str = "two";
//        }else {
//            str = "three";
//        }
//        return str;
    }

    /**
     * A 完全不必要的Else块
     * @param input
     */
    public static void ifElseTestAa(int input){
        if(input > 0){
            // ...code
        }else {
            // ...code
        }
    }
    public static void ifElseTestAb(int input){
        if(input > 0){
            // ...code
        }
        // ...code
    }
}
