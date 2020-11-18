package casuallycode;


import java8exp.pojo.Apple;
import java8exp.pojo.User;

import java.math.BigDecimal;
import java.util.Arrays;

/**
 * 可变参数
 *
 * @author: Liwncy
 * @date: 2020-11-18 08:52
 **/
public class CasuallyCad {

    public static void main(String[] args) {
        CasuallyCad cad = new CasuallyCad();
//        cad.ra("qwe","wew","qas","fss");
        // String
//        cad.ru("abc","cba","cde");
        //
        User user = new User(1,"xiaohong","nan", 18);
        Apple apple = new Apple(1, "pingguo", new BigDecimal(10), 10);
        cad.ru(user,apple,null,apple);
    }

    public String ra(String... strings){
        strings[1] = "uu";
        Arrays.stream(strings).forEach(System.out::print);
        System.out.println(Arrays.toString(strings));
        return "";
    }

    public String ru(Object... obj){
//        Arrays.stream(obj).forEach(System.out::print);
        Arrays.stream(obj).forEach((value)->{
            if(value == null){
                return;
            }
            if(value instanceof java8exp.pojo.User){
                User user = (User)value;
                System.out.println(user.getName());
            }
            System.out.println(value);
            System.out.println(value);
            System.out.println(value.getClass());
            System.out.println(value.toString());
        });
//        System.out.println(Arrays.toString(obj));
        return "";
    }
}
