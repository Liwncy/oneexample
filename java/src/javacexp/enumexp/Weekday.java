package javacexp.enumexp;

/**
 * 星期枚举
 *
 * @author: Liwncy
 * @date: 2020-11-13 13:46
 **/
public enum Weekday {
    // 星期
    SUN(0),
    MON(1),
    TUS(2),
    WED(3),
    THU(4),
    FRI(5),
    SAT(6);

    private int value;

    private Weekday(int value){
        this.value = value;
    }

    public static Weekday getNextDay(Weekday nowDay){
        int nextDayValue = nowDay.value;

        if (++nextDayValue == 7){
            nextDayValue =0;
        }

        return getWeekdayByValue(nextDayValue);
    }

    public static Weekday getWeekdayByValue(int value) {
        for (Weekday c : Weekday.values()) {
            if (c.value == value) {
                return c;
            }
        }
        return null;
    }
}

class Test2{
    public static void main(String[] args) {
        System.out.println("nowday ====> " + Weekday.SAT);
        System.out.println("nowday int ====> " + Weekday.SAT.ordinal());
        System.out.println("nextday ====> " + Weekday.getNextDay(Weekday.SAT)); // 输出 SUN

        //输出：
        //nowday ====> SAT
        //nowday int ====> 6
        //nextday ====> SUN
    }
}
