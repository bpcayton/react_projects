FROM node:20


ADD dod_proxy.crt /usr/share/ca-certificates
RUN echo dod_proxy.crt >> /etc/ca-certificates.conf
RUN update-ca-certificates
ENV NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/dod_proxy.crt
RUN npm i -g jest

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true
