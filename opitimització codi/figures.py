'''DIBUIXANT ELEMENTS
La llibreria arcade disposa d'unes primitives (funcions de dibuix) que ens permeten dibuixar:'''
import arcade

# Open up a window.
# From the "arcade" library, use a function called "open_window"
# Set the window title to "Drawing Example"
# Set the dimensions (width and height)
arcade.open_window(600, 600, "Drawing Example")

# Set the background color
arcade.set_background_color(arcade.csscolor.SKY_BLUE)

# Get ready to draw
arcade.start_render()

#Rectangles: 
arcade.draw_lrtb_rectangle_filled(0, 599, 300, 0, arcade.csscolor.GREEN)
#Cercles: 
arcade.draw_circle_filled(100, 350, 30, arcade.csscolor.DARK_GREEN)
#Elipses: 
arcade.draw_ellipse_outline(300, 300, 350, 200, arcade.csscolor.RED, 3)
#Arcs: 
arcade.draw_arc_filled(300, 340, 60, 100, arcade.csscolor.DARK_GREEN, 0, 180)
#Triangles: 
arcade.draw_triangle_filled(400, 400, 370, 320, 430, 320, arcade.csscolor.GREEN)
#Polígons: 
arcade.draw_polygon_filled(((500, 400),
(480, 360),
(470, 320),
(530, 320),
(520, 360)
),
arcade.csscolor.DARK_GREEN)
#Línies: 
arcade.draw_line(500, 550, 550, 600, arcade.color.YELLOW, 3)
#Texte: 
arcade.draw_text("Arbor Day - Plant a Tree!",150, 230,arcade.color.BLACK, 24)

# Finish drawing
arcade.finish_render()

# Keep the window up until someone closes it.
arcade.run()
