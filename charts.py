import matplotlib.pyplot as plt
import numpy as np

init_value = 0.017
end_value = 1
n_days = 1200 

fig, ax = plt.subplots(1,1)
# Linear model
x = np.arange(1200)
rate_linear = (end_value - init_value)/ n_days
y_linear = init_value + rate_linear*x
ax.plot(x,y_linear, label="Linear")

# Exponential model
rate_exponential = (end_value/init_value)**(1/n_days)
y_exp = init_value*rate_exponential**x
ax.plot(x,y_exp, label="Exponential")


ax.legend()
plt.show()