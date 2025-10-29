#!/usr/bin/env bash
set -euo pipefail

# Resolve repository root based on script location
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Backend setup: create/update Python virtual environment and install dependencies
(
  cd "${SCRIPT_DIR}/backend"

  VENV_DIR=".venv"
  if [ ! -d "${VENV_DIR}" ]; then
    python -m venv "${VENV_DIR}"
  fi

  if [ -x "${VENV_DIR}/bin/python" ]; then
    VENV_PY="${VENV_DIR}/bin/python"
  elif [ -x "${VENV_DIR}/Scripts/python.exe" ]; then
    VENV_PY="${VENV_DIR}/Scripts/python.exe"
  else
    echo "Could not locate virtual environment python executable." >&2
    exit 1
  fi

  "${VENV_PY}" -m pip install --upgrade pip
  "${VENV_PY}" -m pip install -r requirements.txt
)

# Frontend setup: install dependencies with pnpm
(
  cd "${SCRIPT_DIR}/frontend"
  npm install
)
