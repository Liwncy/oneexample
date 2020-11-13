package casuallycode;

/**
 * 验证异常处理
 *
 * @author: Liwncy
 * @date: 2020-11-11 11:13
 **/
public class CasuallyCab {

    public static void main(String[] args) throws Exception {
        CasuallyCab code = new CasuallyCab();
//        code.test1();
//        code.test2();
        code.test3();
    }

    public void test1() throws Exception{
        throw new Exception("抛出异常1");
//        System.out.println("执行没1");
    }
    public void test2() throws Exception{
        if(true){
            throw new Exception("抛出异常2");
        }
        System.out.println("执行没2");
    }
    public void test3() throws Exception{
        try {
            throw new Exception("抛出异常3");
        }catch (Exception e){
            e.printStackTrace();
        }
        System.out.println("执行没3");
    }
}
