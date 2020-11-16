package casuallycode;

/**
 * 数字格式化java版
 *
 * @author: Liwncy
 * @date: 2020-11-16 10:14
 **/
public class CasuallyCac {

    public static void main(String[] args) {
        CasuallyCac cac = new CasuallyCac();
        System.out.println(cac.toThousands(1000000000));
    }

    public String  toThousands(int num){
        return (""+num).replaceAll("(\\d)(?=(?:\\d{3})+$)", "$1,");
    }
}
