package javacexp.robot;

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

/**
 * @Classname
 * @Description //TODO $
 * @Date
 * @Author
 */
public class Click {

    public static void main(String[] args) {
        JFrame jf = new JFrame("Jframe");
        jf.setLayout(new FlowLayout());
        jf.setSize(300, 200);      //设定窗体的宽和高
        jf.setVisible(true);      // 设定窗口为可见
        jf.setLocation(800, 200);    // 设定窗体的坐标
        JLabel lb = new JLabel("此处显示鼠标右键点击后的坐标");   //  创建一个 Label对象
        jf.add(lb);     // 添加标签到窗口上
        jf.addMouseListener(new MouseListener() {   //为窗口添加鼠标事件监听器
            @Override
            public void mousePressed(MouseEvent e) {
                // TODO Auto-generated method stub
                if (e.getButton() == MouseEvent.BUTTON3) {    // 判断获取的按钮是否为鼠标的右击
                    lb.setText(e.getX() + "," + e.getY());     // 获得鼠标点击位置的坐标并发送到标签的文字上
                }
            }

            @Override
            public void mouseClicked(MouseEvent e) {
                // TODO Auto-generated method stub

            }

            @Override
            public void mouseReleased(MouseEvent e) {
                // TODO Auto-generated method stub

            }

            @Override
            public void mouseEntered(MouseEvent e) {
                // TODO Auto-generated method stub

            }

            @Override
            public void mouseExited(MouseEvent e) {
                // TODO Auto-generated method stub

            }

        });
    }


}
