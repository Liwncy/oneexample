package javacexp.ioexp;

/**
 * io流
 *
 * @author: Liwncy
 * @date: 2020-11-20 11:37
 **/
public class IOExpAaa {
    public static void main(String[] args) {
        System.out.println("12321445646564a".replaceAll("(\\d)(?=(?:\\d{3})+$)","$1,"));
        //System.out.println(cac.toThousands(1000000000));
    }
}
