package casuallycode;

import java.io.UnsupportedEncodingException;

/**
 * 随手代码
 *
 * @author: Liwncy
 * @date: 2020-10-30 16:18
 * 17865163233
 **/
public class CasuallyCaa {
    public static void main(String[] args) throws UnsupportedEncodingException {
//        int[] num = new int[]{5,6,7,8,1,2,3};
//        int[] index = new int[]{4,2,3,1,0,4,1,6,5,6,6};
//        String tel = "";
//        for (int i:index) {
//            tel += num[i];
//        }
//        System.out.println("vx&tel:"+tel);

        CasuallyCaa test = new CasuallyCaa();
        StringBuilder str = new StringBuilder(test.getStr(66));
//        String a = "aa吉萨大B啊是多久啊撒大飒飒的aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        String a = "a";
        int len = a.getBytes("GB2312").length;
        //str的27-50替换为a
        str.replace(27, 47, test.substringByBytes(a,20));
        test.substringByBytes(str.toString(), 66);
        System.out.println(str);
        System.out.println(test.getStr(66));

    }



    public String substringByBytes(String str, int num) throws UnsupportedEncodingException {
        int bytenum = str.getBytes("GB2312").length;
        if (bytenum == num) {
            return str;
        }
        if (bytenum < num) {
            return str + getStr(num - bytenum);
        }
        if ((str.charAt(str.length() - 1) + "").getBytes("GB2312").length != 1) {
            str = str.substring(0, str.length() - 1);
            str += "x";
        } else {
            str = str.substring(0, str.length() - 1);
        }
        return substringByBytes(str, num);
    }
    public String getStr(int num) {
        String str = "";
        for (int i = 0; i < num; i++) {
            str += "x";
        }
        return str;
    }
}
