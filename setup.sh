#!/bin/bash
echo "Configurando hooks y submódulos..."

git config core.hooksPath .githooks
git submodule update --init --recursive

echo "Proyecto listo"